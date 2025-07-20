# 🌟 Charitron - Bridging Donors & NGOs

**Charitron** is a donation management platform that connects generous donors with verified NGOs. It provides a centralized system to handle donations, track NGO activities, and encourage transparency in charitable giving.

> 📌 Built using **Oracle Database**, **Node.js**, **Express.js**, and basic **REACT & CSS**.


## 🚀 Features

- 🧾 NGO Registration & Login
- 💸 Donation Entry and Tracking
- 📋 View All Registered NGOs
- 📊 NGO Dashboard Overview
- 🔐 Secure Backend Integration with Oracle


## 🛠️ Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| **Frontend**  | REACT, CSS               |
| **Backend**   | Node.js, Express.js      |
| **Database**  | Oracle SQL               |


## 📂 Folder Structure


Charitron/
├── db.js                # Oracle DB connection configuration
├── server.js            # Main server file
├── routes/              # API route handlers
├── public/              # HTML/CSS files (Frontend)
├── views/               # Optional: Templating (if any)
└── README.md            # Project documentation

## ⚙️ Getting Started

Follow the steps below to run the project locally:

### 1. Clone the Repository

git clone https://github.com/ranjeni7/Charitron.git
cd Charitron

### 2. Install Required Packages

npm install

### 3. Setup Oracle DB Connection

Edit `db.js` with your Oracle database credentials:

const oracledb = require("oracledb");

const dbConfig = {
  user: "your_username",
  password: "your_password",
  connectString: "localhost/XEPDB1"
};

module.exports = async function getConnection() {
  return await oracledb.getConnection(dbConfig);
};

> ✅ Ensure your Oracle DB is installed and running.

### 4. Run the Server

node server.js

Open your browser and visit:
👉 `http://localhost:5000`

## ✨ Example Pages

* `home.html` – Welcome page
* `donor.html` – Form to add donations
* `ngo.html` – View NGOs
* `admin.html` – Admin panel (optional)

## 🎯 Use Cases

* NGOs can register, log in, and track donation entries.
* Donors can explore NGOs and contribute.
* Admins (if added) can verify NGO details and manage the system.

## 🧠 Future Improvements

* Add a secure login system with JWT or session cookies
* Integrate Razorpay/Stripe for online donations
* Email notifications for NGO registration/donation confirmation
* Upgrade UI using React or Bootstrap
* Add admin role for NGO approval workflow

## 🙋‍♀️ About Me

I'm [Ranjeni C](https://www.linkedin.com/in/ranjeni-c-53382128b), an aspiring Software Development Engineer and 3rd-year B.Tech IT student at MIT Campus, Anna University. This project was built to explore backend development using Oracle and Express.js.
