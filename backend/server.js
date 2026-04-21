const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files from 'frontend/dist' to run on the same port
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Database Pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// ==================== HEALTH CHECK ====================
app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'OK', timestamp: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== COURSES ====================
app.get('/api/courses', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.*, cc.category_name 
      FROM courses c 
      LEFT JOIN course_categories cc ON c.category_id = cc.category_id
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/courses/:id', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.*, cc.category_name 
      FROM courses c 
      LEFT JOIN course_categories cc ON c.category_id = cc.category_id
      WHERE c.course_id = $1
    `, [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Course not found' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/courses', async (req, res) => {
  const { title, category_id, duration, fee, batch_format } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO courses (title, category_id, duration, fee, batch_format) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, category_id, duration, fee, batch_format]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== COURSE CATEGORIES ====================
app.get('/api/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM course_categories');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/categories', async (req, res) => {
  const { category_name } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO course_categories (category_name) VALUES ($1) RETURNING *',
      [category_name]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== USERS ====================
app.post('/api/users', async (req, res) => {
  const { email, password, name, phone, user_type } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (email, password, name, phone, user_type) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [email, password, name, phone, user_type]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== STUDENTS ====================
app.post('/api/students', async (req, res) => {
  const { user_id, dob, gender, education, parent_name, parent_phone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO students (user_id, dob, gender, education, parent_name, parent_phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, dob, gender, education, parent_name, parent_phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/students/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students WHERE student_id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Student not found' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== ADMISSIONS ====================
app.get('/api/admissions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM admissions');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/admissions', async (req, res) => {
  const { student_id, course_id, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO admissions (student_id, course_id, status) VALUES ($1, $2, $3) RETURNING *',
      [student_id, course_id, status || 'applied']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/admissions/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const result = await pool.query(
      'UPDATE admissions SET status = $1 WHERE admission_id = $2 RETURNING *',
      [status, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== ENROLLMENTS ====================
app.get('/api/enrollments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM enrollments');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/enrollments', async (req, res) => {
  const { student_id, course_id, status, payment } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO enrollments (student_id, course_id, status, payment) VALUES ($1, $2, $3, $4) RETURNING *',
      [student_id, course_id, status || 'pending', payment]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== CONTACT FORMS ====================
app.get('/api/contact-forms', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contact_forms ORDER BY submitted_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/contact-forms', async (req, res) => {
  const { name, email, phone, course, message } = req.body;
  try {
    let course_id = null;
    if (course) {
      // Find course by title
      const courseRes = await pool.query('SELECT course_id FROM courses WHERE title ILIKE $1 OR title ILIKE $2 LIMIT 1', [`%${course}%`, course]);
      if (courseRes.rows.length > 0) course_id = courseRes.rows[0].course_id;
    }
    const result = await pool.query(
      'INSERT INTO contact_forms (name, email, phone, course_id, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, course_id, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== FRONTEND APPLY ROUTE ====================
app.post('/api/apply', async (req, res) => {
  const { name, dob, gender, phone, email, education, course, fatherName, motherName, parentPhone } = req.body;
  
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // 1. Resolve Course ID
    let course_id = null;
    if (course) {
      const courseRes = await client.query('SELECT course_id FROM courses WHERE title ILIKE $1 LIMIT 1', [`%${course}%`]);
      if (courseRes.rows.length > 0) course_id = courseRes.rows[0].course_id;
    }
    
    if (!course_id) {
       throw new Error(`Course not recognized: ${course}`);
    }

    // 2. Upsert User
    let userRes = await client.query('SELECT user_id FROM users WHERE email = $1', [email]);
    let user_id;
    if (userRes.rows.length === 0) {
      userRes = await client.query(
        'INSERT INTO users (email, password, name, phone, user_type) VALUES ($1, $2, $3, $4, $5) RETURNING user_id',
        [email, 'default_student_pwd', name, phone, 'student']
      );
    }
    user_id = userRes.rows[0].user_id;

    // 3. Upsert Student
    let studentRes = await client.query('SELECT student_id FROM students WHERE user_id = $1', [user_id]);
    let student_id;
    if (studentRes.rows.length === 0) {
      studentRes = await client.query(
        'INSERT INTO students (user_id, dob, gender, education, parent_name, parent_phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING student_id',
        [user_id, dob || null, gender, education, fatherName || motherName, parentPhone]
      );
    } else {
        // Update student info if needed (optional)
        await client.query(
            'UPDATE students SET dob = COALESCE($1, dob), gender = COALESCE($2, gender), education = COALESCE($3, education), parent_name = COALESCE($4, parent_name), parent_phone = COALESCE($5, parent_phone) WHERE student_id = $6',
            [dob || null, gender, education, fatherName || motherName, parentPhone, studentRes.rows[0].student_id]
        );
    }
    student_id = studentRes.rows[0].student_id;

    // 4. Create Admission
    const admissionRes = await client.query(
      "INSERT INTO admissions (student_id, course_id, status) VALUES ($1, $2, 'applied') RETURNING *",
      [student_id, course_id]
    );

    await client.query('COMMIT');
    res.status(201).json({ message: 'Application submitted successfully', admission: admissionRes.rows[0] });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

// ==================== TESTIMONIALS ====================
app.get('/api/testimonials', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/testimonials', async (req, res) => {
  const { student_id, course_id, rating, review_text } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO testimonials (student_id, course_id, rating, review_text) VALUES ($1, $2, $3, $4) RETURNING *',
      [student_id, course_id, rating, review_text]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== FACULTY ====================
app.post('/api/faculty', async (req, res) => {
  const { user_id, specialization, experience } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO faculty (user_id, specialization, experience) VALUES ($1, $2, $3) RETURNING *',
      [user_id, specialization, experience]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/faculty', async (req, res) => {
  try {
    const result = await pool.query('SELECT f.*, u.name, u.email FROM faculty f JOIN users u ON f.user_id = u.user_id');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== START SERVER ====================
// Fallback to React app
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Global Error Handler to force JSON responses
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`✅ Academy Full-Stack Server running on port ${PORT}`);
  console.log(`📍 Health Check: http://localhost:${PORT}/api/health`);
});