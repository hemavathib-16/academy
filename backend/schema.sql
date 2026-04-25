-- =========================
-- CLEAN RESET (OPTIONAL)
-- =========================
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

-- =========================
-- USERS TABLE
-- =========================
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    user_type VARCHAR(20) CHECK (user_type IN ('student','faculty','admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- COURSE CATEGORIES
-- =========================
CREATE TABLE course_categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) UNIQUE NOT NULL
);

-- =========================
-- COURSES
-- =========================
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category_id INT REFERENCES course_categories(category_id) ON DELETE SET NULL,
    duration VARCHAR(50),
    fee NUMERIC(10,2),
    batch_format VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- STUDENTS
-- =========================
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
    dob DATE,
    gender VARCHAR(10),
    education VARCHAR(100),
    parent_name VARCHAR(100),
    parent_phone VARCHAR(15)
);

-- =========================
-- FACULTY
-- =========================
CREATE TABLE faculty (
    faculty_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
    specialization VARCHAR(100),
    experience INT
);

-- =========================
-- ADMINS
-- =========================
CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
    role VARCHAR(50)
);

-- =========================
-- ADMISSIONS
-- =========================
CREATE TABLE admissions (
    admission_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(course_id) ON DELETE CASCADE,
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'applied'
        CHECK (status IN ('applied','reviewed','accepted','rejected'))
);

-- =========================
-- ENROLLMENTS
-- =========================
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(course_id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending'
        CHECK (status IN ('pending','active','completed','cancelled')),
    payment NUMERIC(10,2),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(student_id, course_id)
);

-- =========================
-- CONTACT FORMS
-- =========================
CREATE TABLE contact_forms (
    contact_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(15),
    course_id INT REFERENCES courses(course_id) ON DELETE SET NULL,
    message TEXT,
    status VARCHAR(20) DEFAULT 'new'
        CHECK (status IN ('new','in_progress','resolved')),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- TESTIMONIALS
-- =========================
CREATE TABLE testimonials (
    testimonial_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id) ON DELETE CASCADE,
    course_id INT REFERENCES courses(course_id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- INDEXES
-- =========================
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_courses_category ON courses(category_id);
CREATE INDEX idx_enrollments_student ON enrollments(student_id);
CREATE INDEX idx_admissions_student ON admissions(student_id);
