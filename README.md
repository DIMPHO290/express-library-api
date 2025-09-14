# 📚 express-library-api

A simple RESTful API built with **Node.js**, **TypeScript**, **Express**, and **express-validator** to manage **authors** and **books**.  
This project demonstrates CRUD operations, request validation, and proper error handling (`400`, `404`, `409`).

---

## 🚀 Features

- **Authors**

  - Create a new author with validation
  - Read all authors or a specific author by ID
  - Update an existing author’s details
  - Delete an author by ID

- **Books**

  - Create a new book with validation
  - Read all books or a specific book by ID
  - Update an existing book’s details
  - Delete a book by ID

- Handles **validation errors** (`400`), **not found errors** (`404`), and **duplicate entries** (`409`)

---

## 🛠️ Tech Stack

- [Node.js]
- [TypeScript]
- [Express]
- [express-validator]

---

## ⚙️ Installation & Setup

1. ### Clone the repo
   ```bash
   git clone https://github.com/DIMPHO290/express-library-api.git
   cd express-library-api
   ```
   ### 2. Open the project in VS code
   ```bash
   code .
   ```
   ### 3. Change to dev branch
   ```bash
   git checkout dev
   ```
   ### 4. Install dependencies
   ```bash
   npm install
   npm i express-validator
     ```
   ### 5.  Run the server
   ```bash
   npm run dev
   ````
