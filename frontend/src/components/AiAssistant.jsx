import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

// Enhanced Mock AI Logic for Coaching Platform
const generateMockResponse = (message) => {
  const lowerMsg = message.toLowerCase();

  // Greetings & General
  if (lowerMsg.match(/\b(hi|hello|hey|greetings|morning|afternoon)\b/)) {
    return "Hello there! 👋 I am your friendly BMS Academy AI Assistant. I can help you find courses, understand our teaching methodology, or guide you through admissions. How can I help you today?";
  }

  // Course Recommendations & Search
  if (lowerMsg.match(/(course|find|looking for|prepare|preparation|exam|upsc|ca|jee|neet)/)) {
    return "At BMS Academy, we offer top-tier coaching for UPSC, CA (Foundation, Inter, Final), IIT-JEE, and NEET. Whether you need an integrated 2-year program or a crash course, we have you covered! What specific exam are you targeting?";
  }

  // Doubt Solving Mechanism
  if (lowerMsg.match(/(doubt|question|stuck|understand|explain|topic|difficult)/)) {
    return "We take doubt-solving very seriously! We offer dedicated 1-on-1 doubt clearing sessions after every class. Plus, our faculty is available on our specific student portal to answer queries 24/7. Don't worry, we make sure every concept is crystal clear before moving forward!";
  }

  // Faculty & Teachers
  if (lowerMsg.match(/(faculty|teacher|teach|who|tutor|educator)/)) {
    return "Our faculty consists of industry experts, former civil servants, rank holders, and seasoned academicians with 10+ years of experience. They focus on conceptual clarity and exam-oriented strategies to ensure you get the best guidance possible.";
  }

  // Study Material & Notes
  if (lowerMsg.match(/(material|notes|books|pdf|study|content)/)) {
    return "Absolutely! Enrolled students receive our comprehensive, updated study material, including concise printed notes, daily current affairs (for competitive exams), and digital PDFs accessible anytime on our platform.";
  }

  // Mock Tests & Test Series
  if (lowerMsg.match(/(test|mock|series|exam|assessment|practice)/)) {
    return "Practice is key to cracking any exam! We provide a rigorous Test Series simulating the real exam environment. This includes weekly topic-wise tests, full-length mock exams, and personalized performance analytics to help you identify weak areas.";
  }

  // Online vs Offline Classes
  if (lowerMsg.match(/(online|offline|live|recorded|hybrid|center)/)) {
    return "We offer flexible learning modes! You can join our traditional Classroom (Offline) batches at our Bangalore campus, or opt for completely Online Live Classes. All live sessions are recorded and provided to you for unlimited revision.";
  }

  // Scholarships & Discounts
  if (lowerMsg.match(/(scholarship|discount|concession|offer|waive)/)) {
    return "We believe in rewarding merit! BMS Academy conducts regular Scholarship Tests where you can win up to 100% fee waivers. We also offer special concessions for economically weaker sections and siblings. Would you like the link to our next scholarship test?";
  }

  // Language Medium
  if (lowerMsg.match(/(language|medium|english|hindi|kannada)/)) {
    return "Our primary medium of instruction is English, but our faculty is highly bilingual and can explain complex concepts in local languages (like Kannada or Hindi) during doubt-clearing sessions to ensure complete understanding.";
  }

  // Enrollments & Pricing
  if (lowerMsg.match(/(enroll|price|fee|cost|pay|admission|join)/)) {
    return "Our fee structures are highly transparent and competitive. For instance, comprehensive UPSC coaching takes 12-18 months. We accept online payments, NEFT, and offer EMI options. You can start the process by visiting the 'Apply Now' section above!";
  }

  // Motivation & Failure Handling
  if (lowerMsg.match(/(failed|scared|nervous|hard|tough|give up|motivation)/)) {
    return "It's completely normal to feel overwhelmed. Remember, every topper has faced setbacks. Competitive exams test perseverance as much as knowledge. Our mentors are here to guide your strategy and keep you motivated. You've got this! Start small, stay consistent.";
  }

  // Technical & Admin (Refunds, Certificates)
  if (lowerMsg.match(/(certificate|refund|login|app)/)) {
    return "You will receive a completion certificate at the end of training. Full refunds are available within 7 days of enrollment. If you are having trouble logging into the student portal, please ensure you are using your registered email ID.";
  }
  
  // Broad Fallback (Catch-all)
  return "That's an insightful question! I am still learning the specifics about that. I highly recommend reaching out to our expert academic counselors who can give you a personalized, detailed answer. Would you like me to share our contact details or book a free counselling session for you?";
};

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! 👋 I'm your BMS Academy AI Assistant. I can help you find courses, explain topics, recommend learning paths, or assist with enrollment. What would you like to explore today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate backend delay then respond
    setTimeout(() => {
      const reply = generateMockResponse(newMessage.content);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="bg-card rounded-2xl border border-border/50 card-shadow overflow-hidden flex flex-col h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/90 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <Sparkles className="text-gold" size={20} />
          </div>
          <div>
            <h3 className="font-display font-bold text-primary-foreground">BMS Study Buddy</h3>
            <p className="text-xs text-primary-foreground/70">Online • Ready to help</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth bg-secondary/20">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-gold text-accent-foreground"}`}>
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-none" 
                    : "bg-white dark:bg-card border border-border/50 text-foreground ml-1 rounded-tl-none"
                }`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-gold text-accent-foreground">
                  <Bot size={16} />
                </div>
                <div className="px-4 py-4 rounded-2xl bg-white dark:bg-card border border-border/50 ml-1 rounded-tl-none flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-gold animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-background border-t border-border/50">
        <form onSubmit={handleSend} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about courses, fees, or topics..."
            className="w-full pl-5 pr-14 py-4 rounded-xl border border-border/50 bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-gold/50 outline-none transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 p-2.5 bg-gold text-accent-foreground rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-dark transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiAssistant;
