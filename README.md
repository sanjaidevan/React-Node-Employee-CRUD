# React-Node Employee CRUD Application

A full-stack web application for managing employee records with Create, Read, Update, and Delete (CRUD) operations. Built with React for the frontend and Node.js/Express for the backend, with MySQL as the database.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Database Schema](#database-schema)
- [Project Structure Details](#project-structure-details)

## 🎯 Overview

This application provides a comprehensive solution for managing employee data. It features:
- View all employees in a responsive table
- Create new employee records
- Edit existing employee information
- Delete employee records
- Input validation and error handling
- User-friendly interface with Bootstrap styling

## 🛠️ Tech Stack

### Frontend
- **React** (v19.2.6) - UI library
- **Vite** (v8.0.12) - Build tool and dev server
- **React Router DOM** (v7.18.0) - Client-side routing
- **Axios** (v1.18.1) - HTTP client
- **Bootstrap** (v5.3.8) & **React Bootstrap** (v2.10.10) - UI framework
- **React Toastify** (v11.1.0) - Toast notifications
- **ESLint** - Code linting

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v5.2.1) - Web framework
- **Sequelize** (v6.37.8) - ORM for MySQL
- **MySQL2** (v3.22.5) - MySQL driver
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development auto-reload
- **Vitest** (v4.1.9) - Unit testing framework

### Database
- **MySQL** - Relational database

## 📁 Project Structure

```
React-Node-Employee-CRUD/
├── backend/                          # Node.js backend
│   ├── config/
│   │   └── db.js                    # Database configuration
│   ├── controller/
│   │   └── employee.controller.js   # Business logic for employees
│   ├── middleware/
│   │   ├── employee.Validate.js     # Input validation middleware
│   │   └── errorHandler.js          # Global error handler
│   ├── model/
│   │   └── employee.model.js        # Sequelize employee model
│   ├── routes/
│   │   └── employee.routes.js       # API routes
│   ├── services/
│   │   └── employee.services.js     # Database service layer
│   ├── tests/
│   │   └── employee.controller.test.js  # Unit tests
│   ├── index.js                     # Express app initialization
│   ├── server.js                    # Server entry point
│   ├── package.json                 # Backend dependencies
│   └── vitest.config.js             # Vitest configuration
│
└── employee-frontend/                # React frontend
    ├── src/
    │   ├── api/
    │   │   └── employeeApi.js       # API call functions
    │   ├── components/
    │   │   ├── EmployeeForm.jsx     # Reusable form component
    │   │   └── EmployeeTable.jsx    # Employee table display
    │   ├── pages/
    │   │   ├── CreateEmployee.jsx   # Create employee page
    │   │   ├── EditEmployee.jsx     # Edit employee page
    │   │   └── EmployeeList.jsx     # View all employees page
    │   ├── routes/
    │   │   └── AppRoutes.jsx        # Route configuration
    │   ├── services/
    │   │   └── axiosInstance.js     # Axios instance setup
    │   ├── utils/
    │   │   └── errorHandler.js      # Frontend error handling
    │   ├── App.jsx                  # Main App component
    │   ├── App.css                  # App styles
    │   ├── main.jsx                 # React entry point
    │   └── index.css                # Global styles
    ├── public/                       # Static assets
    ├── index.html                    # HTML template
    ├── package.json                  # Frontend dependencies
    ├── vite.config.js               # Vite configuration
    ├── eslint.config.js             # ESLint configuration
    └── README.md                     # Frontend documentation
```

## 📦 Prerequisites

Before running this application, ensure you have installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MySQL** (v5.7 or higher) - [Download](https://www.mysql.com/downloads/)
- **Git** (optional) - [Download](https://git-scm.com/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd React-Node-Employee-CRUD
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory with the following configuration:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_db
```

**Configuration Details:**
- `PORT` - Port on which the server will run (default: 5000)
- `DB_HOST` - MySQL host (usually localhost for local development)
- `DB_USER` - MySQL username (default: root)
- `DB_PASSWORD` - MySQL password
- `DB_NAME` - Database name (will be created by Sequelize if it doesn't exist)

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd ../employee-frontend
```

Install frontend dependencies:

```bash
npm install
```

Create a `.env` file in the `employee-frontend` directory (optional):

```env
VITE_API_BASE_URL=http://localhost:5000
```

## 🏃 Running the Application

### Backend

From the `backend` directory:

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The backend server will start at `http://localhost:5000`

### Frontend

From the `employee-frontend` directory:

**Development mode**:
```bash
npm run dev
```

**Production build**:
```bash
npm run build
```

**Preview production build**:
```bash
npm run preview
```

The frontend will be available at `http://localhost:5173` (default Vite port)

### Testing

Run backend unit tests:

```bash
cd backend
npm test
```

## 🔌 API Endpoints

All endpoints are prefixed with `/api`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/employees` | Retrieve all employees | - |
| GET | `/employee/:id` | Get employee by ID | - |
| POST | `/employee/register` | Create new employee | `{firstName, lastName, dob, email_id, mobile, role}` |
| PUT | `/employee/edit/:id` | Update employee | `{firstName, lastName, dob, email_id, mobile, role}` |
| DELETE | `/employee/remove/:id` | Delete employee | - |

### Example API Calls

**Create Employee:**
```bash
POST http://localhost:5000/api/employee/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "dob": "1990-01-15",
  "email_id": "john.doe@example.com",
  "mobile": "+14155552671",
  "role": "employee"
}
```

**Update Employee:**
```bash
PUT http://localhost:5000/api/employee/edit/1
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "dob": "1992-05-20",
  "email_id": "jane.smith@example.com",
  "mobile": "+14155552672",
  "role": "admin"
}
```

## ✨ Features

### Frontend Features
- ✅ Responsive design using Bootstrap
- ✅ View all employees in a table format
- ✅ Create new employee records with validation
- ✅ Edit existing employee information
- ✅ Delete employee records with confirmation
- ✅ Toast notifications for user feedback
- ✅ Form validation before submission
- ✅ Error handling and display

### Backend Features
- ✅ RESTful API design
- ✅ Input validation middleware
- ✅ MySQL database integration with Sequelize ORM
- ✅ Error handling middleware
- ✅ CORS support for cross-origin requests
- ✅ Unit tests with Vitest
- ✅ Environment variable configuration
- ✅ Auto-reload in development mode

### Data Validation
- First Name: 3-50 characters, letters only
- Last Name: 1-50 characters, letters, spaces, and dots allowed
- Email: Valid email format
- Mobile: International format with 12-16 digits (e.g., +14155552671)
- Role: Either "employee" or "admin"
- DOB: Date in YYYY-MM-DD format

## 💾 Database Schema

### Employee Table

```sql
CREATE TABLE employee_tbl (
  emp_id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  email_id VARCHAR(253) NOT NULL UNIQUE,
  mobile VARCHAR(16) NOT NULL UNIQUE,
  role ENUM('employee', 'admin') DEFAULT 'employee'
);
```

**Fields:**
- `emp_id` - Unique identifier (auto-increment)
- `firstName` - Employee's first name
- `lastName` - Employee's last name
- `dob` - Date of birth
- `email_id` - Email address (unique)
- `mobile` - Phone number in international format (unique)
- `role` - Employee role (employee or admin)

## 📊 Project Structure Details

### Backend Architecture

**Controller Layer** (`employee.controller.js`)
- Handles HTTP requests and responses
- Calls service layer for business logic
- Returns JSON responses

**Service Layer** (`employee.services.js`)
- Contains business logic
- Interacts with database models
- Handles data processing

**Model Layer** (`employee.model.js`)
- Defines Sequelize model for Employee table
- Includes field validations
- Manages database schema

**Middleware**
- `employee.Validate.js` - Validates incoming requests
- `errorHandler.js` - Centralized error handling

**Routes** (`employee.routes.js`)
- Defines API endpoints
- Maps endpoints to controller methods

### Frontend Architecture

**Pages**
- `EmployeeList.jsx` - Displays all employees
- `CreateEmployee.jsx` - Form for creating new employees
- `EditEmployee.jsx` - Form for editing existing employees

**Components**
- `EmployeeForm.jsx` - Reusable form component
- `EmployeeTable.jsx` - Table component for displaying employees

**Services**
- `employeeApi.js` - API call wrapper functions
- `axiosInstance.js` - Axios configuration

**Utilities**
- `errorHandler.js` - Error handling utilities

## 🐛 Troubleshooting

### Backend Issues

**MySQL Connection Error:**
- Verify MySQL is running
- Check database credentials in `.env`
- Ensure the database exists or Sequelize can create it

**Port Already in Use:**
- Change the PORT in `.env`
- Or kill the process using the port: `lsof -i :5000` (macOS/Linux)

### Frontend Issues

**Module not found errors:**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

**Port 5173 already in use:**
- Vite will automatically use a different port
- Or specify port: `npm run dev -- --port 3000`

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_db
```

### Frontend (.env) - Optional
```env
VITE_API_BASE_URL=http://localhost:5000
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the `package.json` file for details.

## 👥 Support

For issues and questions:
- Check existing issues in the repository
- Create a new issue with detailed description
- Include steps to reproduce for bugs

## 🗺️ Future Enhancements

Potential features to add:
- User authentication and authorization
- Employee search and filtering
- Pagination for large datasets
- Bulk employee import/export
- Department management
- Salary information
- Leave management
- Performance reviews
- Email notifications
- Dashboard with analytics
