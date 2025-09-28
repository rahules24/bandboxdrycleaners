
# 🧼 Band Box Drycleaners – Full-Stack Business Web App

A production-ready, full-stack web application built for a local dry cleaning business. Features include real-time billing, order tracking, and admin dashboard for managing services and transactions.

> 🧾 Developed with **React**, **Django**, and **PostgreSQL** | Deployed on **Fly.io** and **GitHub Pages**

---

## 🔗 Live Demo

🌐 [BandBoxDrycleaners-Visit the App](https://rahules24.github.io/bandboxdrycleaners/)

---

<img width="1920" height="913" alt="Screenshot 2025-07-16 at 01-31-33 Band Box Drycleaners" src="https://github.com/user-attachments/assets/88a23fb8-00be-47de-b7b4-7095469bdeb3" />


## 💼 Project Purpose

Designed to digitize and streamline the operations of a small business. It allows customers to place orders, and staff to manage and analyze them through a modern interface and robust backend.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, TailwindCSS (deployed via GitHub Pages)
- **Backend:** Django + Django REST Framework (hosted on Fly.io)
- **Database:** PostgreSQL (billing and analytics)
- **APIs:** RESTful API for GET/POST/PUT operations
- **Hosting:** GitHub Pages (frontend), Fly.io (backend)

---

## 📌 Features

- 👕 Order placement with customer details & service types
- 🧾 Billing system with dynamic pricing logic
- 📊 Admin dashboard for tracking orders & payments
- 🔐 Secure login for admins and business staff
- 🔄 Synchronized frontend and backend APIs
- 📈 Billing analytics with database integration

---

## 📂 Project Structure

```
bandboxdrycleaners/
├── frontend/                  # React app
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── backend/                   # Django app
│   ├── bandbox/               # Main Django project
│   └── orders/                # Orders app with models/views/serializers
├── requirements.txt
├── manage.py
└── README.md
```

## 🧠 What I Learned

- REST API design and integration across full-stack layers
- PostgreSQL querying for real-world billing data
- Responsive UI for business workflows
- Deploying Django on Fly.io and React on GitHub Pages
