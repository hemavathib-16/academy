const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

const parseApiError = async (response) => {
  try {
    const data = await response.json();
    return data?.message || "Request failed.";
  } catch (error) {
    return "Request failed.";
  }
};

export const submitAdmissionApplication = async (payload) => {
  const response = await fetch(`${API_BASE_URL}/admissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await parseApiError(response));
  }

  return response.json();
};

export const submitContactInquiry = async (payload) => {
  const response = await fetch(`${API_BASE_URL}/contact-inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await parseApiError(response));
  }

  return response.json();
};
