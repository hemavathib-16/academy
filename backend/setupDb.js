require('dotenv').config({ path: '../.env' });
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'database1234',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'formDB',
});

const courseCategories = [
  { id: 'civil', title: 'Civil Services' },
  { id: 'commerce', title: 'Commerce' },
  { id: 'science', title: 'Science' },
];

const courses = [
  { id: 'upsc', title: 'UPSC (IAS, IPS, IFS)', category: 'civil', duration: '12–18 months' },
  { id: 'kpsc', title: 'KPSC & State Services', category: 'civil', duration: '10–12 months' },
  { id: 'ca', title: 'CA (Foundation, Inter, Final)', category: 'commerce', duration: '4–8 months per level' },
  { id: 'cs', title: 'CS (Company Secretary)', category: 'commerce', duration: '4–6 months per level' },
  { id: 'cma', title: 'CMA / ICWA', category: 'commerce', duration: '4–6 months per level' },
  { id: 'iit-jee', title: 'IIT-JEE (Main & Advanced)', category: 'science', duration: '1–2 years' },
  { id: 'kcet', title: 'KCET', category: 'science', duration: '6–12 months' },
  { id: 'neet', title: 'NEET', category: 'science', duration: '1–2 years' },
  { id: 'foundation', title: 'Foundation Courses (PU Level)', category: 'science', duration: '2 years (Integrated with PU)' },
];

async function setupAndSeed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // 1. Run Schema
    console.log('Running schema.sql...');
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await client.query(schemaSql);
    
    // 2. Seed Categories
    console.log('Seeding categories...');
    const categoryIdMap = {};
    for (const cat of courseCategories) {
      const res = await client.query(
        'INSERT INTO course_categories (category_name) VALUES ($1) RETURNING category_id',
        [cat.title]
      );
      categoryIdMap[cat.id] = res.rows[0].category_id;
    }

    // 3. Seed Courses
    console.log('Seeding courses...');
    for (const c of courses) {
      const catId = categoryIdMap[c.category];
      await client.query(
        'INSERT INTO courses (title, category_id, duration) VALUES ($1, $2, $3)',
        [c.title, catId, c.duration]
      );
    }
    
    await client.query('COMMIT');
    console.log('✅ Database setup and seeded successfully.');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Error setting up database:', err);
  } finally {
    client.release();
    pool.end();
  }
}

setupAndSeed();
