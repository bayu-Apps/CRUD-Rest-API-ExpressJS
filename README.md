# 🧑‍🏫 Teacher Management REST API

A simple yet powerful REST API built with **Express.js** and **PostgreSQL** to manage teacher data. This project is ideal for beginners who want to practice backend development and CRUD operations with a real database.

---

## ✨ Features

- ✅ **Create** new teacher data (`POST /postData`)
- 📄 **Read** all teachers (`GET /fetchData`)
- 🔍 **Read** teacher by ID (`GET /fetchbyId/:id`)
- ♻️ **Update** teacher data (`PUT /update/:id`)
- ❌ **Delete** teacher data (`DELETE /delete/:id`) ← *Newly Added!*

---

## 💡 Tech Stack

| Tool         | Role                                |
|--------------|-------------------------------------|
| Node.js      | JavaScript runtime                  |
| Express.js   | Web framework for building API      |
| PostgreSQL   | Relational database                 |
| Postman      | API testing                         |
| VS Code      | Code editor                         |

---

## 🧪 Example Request Body

```json
{
  "id": 1,
  "nip": "202507",
  "nama_guru": "Bayu Trihardian",
  "mapel": "Pemrograman Web"
}


## 📄 Sample JSON Payload

```json
{
  "id": 1,
  "nip": "1234567890",
  "nama_guru": "Bayu Trihardian",
  "mapel": "Matematika"
}

# Install dependencies
npm install pg

# Start the server
node main.js

🤓 Author
Bayu Trihardian Syah
📍 Jepara, Indonesia
🎓 SMKN 1 Bangsri - PPLG

⭐️ Give a Star
If you found this project helpful or inspiring, feel free to give it a ⭐️ on GitHub. It really helps!

