# 💼 Job & Internship Platform

A full-stack **MERN** (MongoDB, Express.js, React, Node.js) application designed to connect students with career opportunities. This platform provides a seamless interface for recruiters to manage listings and for students to track their career growth.

## 📸 Project Gallery

| Student Dashboard | Job Listings |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/4b85f776-1494-48b7-a2f0-b94c42b47271" width="400" /> | <img src="https://github.com/user-attachments/assets/fede5423-ad45-4585-bc90-05ade4604b41" width="400" /> |

---

## 🚀 Features

### For Job Seekers (Students)
* **User Authentication:** Secure login/signup with role-based access (Student/Recruiter).
* **Profile Management:** Update personal details, bio, skills, and upload resumes (PDF) via Cloudinary.
* **Job Discovery:** Real-time search and filter functionality by keywords and categories.
* **Application Tracking:** A dedicated dashboard to monitor the status of all your applications.

### For Recruiters
* **Company Branding:** Register and manage company profiles with logos.
* **Job Postings:** Create and edit job listings with specific requirements (Salary, Positions, Experience).
* **Applicant Management:** View detailed profiles and resumes of students who applied.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Redux Toolkit, Tailwind CSS, Shadcn UI.
* **Backend:** Node.js, Express.js, JWT, Cookie-parser.
* **Database:** MongoDB Atlas (Mongoose).
* **Storage:** Cloudinary (Resumes & Images).

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/job-internship-platform.git](https://github.com/your-username/job-internship-platform.git)
cd job-internship-platform
```
### 2. Backend Setup
cd backend
npm install

Create a .env file in the backend folder:
```bash
PORT=8000
MONGO_URI=your_mongodb_atlas_uri
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```
npm run dev


### 3. Frontend Setup
cd ../frontend
npm install
npm run dev


### 🌐 Deployment
Frontend: Hosted on Netlify
Backend: Hosted on Render
Database: Hosted on MongoDB Atlas

[Live Project Link](https://job-and-internship-platform.netlify.app)
