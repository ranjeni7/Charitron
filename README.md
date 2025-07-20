# 🌟 Charitron - Bridging Donors & NGOs

**Charitron** is a donation management platform that connects generous donors with verified NGOs. It provides a centralized system to handle donations, track NGO activities, and encourage transparency in charitable giving.

> 📌 Built using **Oracle Database**, **Node.js**, **Express.js**, and basic **REACT & CSS**.


## 🔑 Key Features
📥 Add & Manage Donors – Create, edit, delete, and search donors.

💸 Track Donations – Record donations with filters for amount, date, and donor.

📊 Analytics Dashboard – Visualize total donations, top donors, and trends.

🧾 Receipt Generation – Export donation records as PDFs or CSVs.

🔍 Search & Filter – Real-time filtering on donor and donation lists.

✏️ Editable Entries – Inline editing and deletion with confirmation dialogs.


## 🛠️ Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| **Frontend**  | REACT, CSS               |
| **Backend**   | Node.js, Express.js      |
| **Database**  | Oracle SQL               |

## ✨ Example Pages

* `DonorForm.js` - Form to add donors.
<img width="1918" height="1018" alt="image" src="https://github.com/user-attachments/assets/0ba9188f-bb2b-4ee0-9b4d-7bcdc1099bfc" />
* `DonorList.js1 - Page to display the donor list with search, edit and delete features.
<img width="1919" height="1011" alt="image" src="https://github.com/user-attachments/assets/11e01941-26bc-4bea-ba39-e61741c61b11" />
* `DonationForm.js` – Form to add the donations.
<img width="1919" height="993" alt="image" src="https://github.com/user-attachments/assets/05938f81-cd04-4ee6-a21b-d1c93ba9d4cb" />
* `DonationList.js` - Page to display the donation list with filtes like search by name, min amount, max amount, date and exporting the list as a csv file.
<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/f16f78aa-0ace-4491-9990-db7f8575032e" />
* `AnalyticsDashboard.js` - Here I displayed the total donations, total donors, top donors and Monthly donations.
<img width="870" height="903" alt="image" src="https://github.com/user-attachments/assets/c5e27744-19f8-4b65-9f9c-80f6f3f0375e" />


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
