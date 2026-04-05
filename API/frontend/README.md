# 🚀 API Flow – API Management Platform

API Flow is a simple yet powerful API management platform that allows developers to register, generate API keys, and securely access APIs with usage tracking. This project is designed as a portfolio-ready full-stack application showcasing backend development, authentication, and API handling.

---

## 📌 Features

* 🔐 **User Authentication**

  * Register & Login system
  * Secure password handling

* 🔑 **API Key Management**

  * Unique API key generated for each user
  * Required for accessing protected APIs

* 📊 **API Usage Tracking**

  * Tracks total API requests
  * Tracks daily usage
  * Logs request timestamps

* ⚡ **Rate Limiting (Optional/Implemented)**

  * Prevents abuse by limiting API requests

* 📡 **Sample APIs**

  * Random jokes API
  * More APIs can be added easily

* 🧾 **Developer-Friendly Documentation**

  * Easy-to-understand API usage guide

---

## 🛠️ Tech Stack

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Frontend:**

* React.js
* CSS

**Other Tools:**

* Postman (API Testing)
* Render (Deployment)

---



## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/scoopy05/Api-usage-tracker.git
cd Api-usage-tracker
```

### 2️⃣ Install Dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Project

**Backend:**

```bash
npm start
```

**Frontend:**

```bash
npm start
```

---

## 🔑 API Authentication

To access protected APIs, include your API key in the request header:

```
x-api-key: YOUR_API_KEY
```

---

## 📡 Example API

### Get Random Joke

**Endpoint:**

```
GET /api/random-jokes
```

**Headers:**

```
x-api-key: YOUR_API_KEY
```

**Response:**

```json
{
  "joke": "Why do programmers hate nature? Too many bugs."
}
```

---

## 📊 API Usage Endpoint

### Get Usage Stats

```
GET /api/usage
```

**Response:**

```json
{
  "totalRequests": 120,
  "todayRequests": 15
}
```

---

## 💡 Future Improvements

* 🌍 Public API marketplace
* 📈 Advanced analytics dashboard
* 💳 Subscription & monetization system
* 🔄 API versioning
* 📦 More sample APIs

---

## 🎯 Purpose of This Project

This project was built as a **portfolio project** to demonstrate:

* Backend development skills
* API security implementation
* Database design & usage tracking
* Full-stack integration

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---



## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
