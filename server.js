const express = require('express');
const cors = require('cors');
const getConnection = require('./db');
const oracledb = require('oracledb');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// GET all donors
app.get('/donors', async (req, res) => {
  try {
    console.log("📥 GET /donors called");
    const conn = await getConnection();
    const result = await conn.execute('SELECT * FROM DONORS');
    console.log("📦 Donor rows:", result.rows);
    res.json(result.rows);
    await conn.close();
  } catch (err) {
    console.error('❌ Error in /donors:', err);
    res.status(500).json({ error: err.message });
  }
});


// GET all donations
app.get('/donations', async (req, res) => {
  try {
    const conn = await getConnection();

    const result = await conn.execute(
      `SELECT d.DONATION_ID, d.AMOUNT, d.DONATED_ON,
              DONORS.NAME AS DONOR_NAME
       FROM DONATIONS d
       JOIN DONORS ON d.DONOR_ID = DONORS.DONOR_ID`,
      [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    await conn.close();
    res.json(result.rows);  // ✅ Send the result
  } catch (err) {
    console.error('❌ Error fetching donations:', err);
    res.status(500).send('Internal Server Error');
  }
});



// POST a new donation
app.post('/donations', async (req, res) => {
  const { donor_id, amount } = req.body;
  try {
    const conn = await getConnection();  // ✅ use getConnection from ./db

    const result = await conn.execute(
      `INSERT INTO DONATIONS (donor_id, amount) VALUES (:1, :2)`,
      [donor_id, amount],
      { autoCommit: true }
    );

    await conn.close();

    console.log("✅ Donation inserted:", result);
    res.status(201).json({ message: 'Donation added!', result });
  } catch (err) {
    console.error('❌ Error adding donation:', err);
    res.status(500).send('Internal Server Error');
  }
});



// POST new donor
app.post('/donors', async (req, res) => {
  try {
    console.log("POST /donors hit! ✅");  // Add this line

    const { name, email } = req.body;
    const conn = await getConnection();

    const result = await conn.execute(
      `INSERT INTO DONORS (name, email) VALUES (:name, :email)`,
      [name, email],
      { autoCommit: true }
    );

    console.log("✅ Donor inserted:", result);
    res.json({ message: 'Donor added' });

    await conn.close();
  } catch (err) {
    console.error('❌ Error in /donors:', err);  // Critical line
    res.status(500).json({ error: err.message });
  }
});

// PUT (Update) a donor
app.put('/donors/:id', async (req, res) => {
  const { name, email } = req.body;
  const id = req.params.id;
  try {
    const conn = await getConnection();
    await conn.execute(
      `UPDATE DONORS SET NAME = :name, EMAIL = :email WHERE DONOR_ID = :id`,
      { name, email, id },
      { autoCommit: true }
    );
    await conn.close();
    res.json({ message: 'Donor updated' });
  } catch (err) {
    console.error('❌ Error updating donor:', err);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE a donor
app.delete('/donors/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const conn = await getConnection();
    await conn.execute(
      `DELETE FROM DONORS WHERE DONOR_ID = :id`,
      [id],
      { autoCommit: true }
    );
    await conn.close();
    res.json({ message: 'Donor deleted' });
  } catch (err) {
    console.error('❌ Error deleting donor:', err);
    res.status(500).send('Internal Server Error');
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
