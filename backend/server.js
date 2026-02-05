const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db")

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



app.post("/api/tickets", (req, res) => {
    try {
        let {name: name, email: email, category: category, description: description, status:status} = req.body;

        if(!name || !email || !category || !description || !status) {
            return res.status(400).json({message: "Please fill all the fields"})
        }

        const sql = `INSERT INTO lakhan_customer_support (id, name, email, category, description, status, created_at) VALUES (NULL, "${name}", "${email}", "${category}", "${description}", "${status}", NOW())`
        db.query(sql, (err, result) => {
            console.log(result);
        })
        res.send("Ticket Raised Added Successfully");
    } catch(err) {
        res.status(500).json({messege: "Server Error"})
    }
})

app.get("/api/tickets", (req, res) => {
    const sql = `SELECT * FROM lakhan_customer_support ORDER BY id DESC`;
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json([]);
        }
        res.send(result);
    })
})



app.listen(3000, () => {
    console.log("server running on port 3000")
})

