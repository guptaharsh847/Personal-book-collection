A full-stack MERN (MongoDB, Express, React, Node.js) application to manage your personal book collection.
It includes features like:

📘 Add, view, update, and delete books

🔍 Search and filter by genre or read status

📷 Upload cover images (via local file or URL) using Cloudinary

🗂️ Categorize by genre, read/unread

🖼️ View detailed book information

🖥️ Tech Stack
Frontend: React + Tailwind CSS + Axios + React Router

Backend: Node.js + Express + MongoDB + Mongoose

Cloud: Cloudinary (image hosting), MongoDB Atlas (DB)

🧑‍💻 Prerequisites
Node.js (v18+)

MongoDB Atlas account (or local MongoDB)

Cloudinary account (free)

🚀 Getting Started
🔧 1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/book-collection-app.git
cd book-collection-app
📁 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
🛠️ Create .env file inside backend/
ini
Copy
Edit
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
MONGODB_URI=your_mongodb_connection_string
PORT=5000
▶️ Start Backend
bash
Copy
Edit
npm start       # or nodemon server.js if using nodemon
App will run at http://localhost:5000

🌐 3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
▶️ Start Frontend
bash
Copy
Edit
npm start
Frontend runs at http://localhost:3000

🖼️ Image Upload Features
You can upload book covers from:

Your system (JPG/PNG)

A public image URL (e.g., from OpenLibrary or Cloudinary)

Images are hosted on Cloudinary

Default placeholder is shown if no image is provided

🔍 Features Overview
✅ Add new books with title, author, genre, year, read status, and cover

✅ View all books with filters (genre, read/unread)

✅ Search by title, author, or genre

✅ Edit book details

✅ Delete books

✅ View individual book detail page

