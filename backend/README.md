# Backend Setup

## 1) Configure environment variables

Copy `.env.example` to `.env` and update values:

```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/bms_academy
CLIENT_URL=http://localhost:8080
```

## 2) Install dependencies

```bash
npm install
```

## 3) Start backend

```bash
npm run dev
```

API base URL: `http://localhost:5000/api`

### Endpoints

- `GET /api/health`
- `POST /api/admissions`
- `POST /api/contact-inquiries`
