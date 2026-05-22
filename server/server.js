require("./db");

const express = require("express");
const Student = require("./models/Student");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/add", async (req, res) => {

  const students = [

    {
      name: "Aarav Sharma",
      email: "aarav@gmail.com",
      course: "Computer Science",
      attendance: 92
    },

    {
      name: "Priya Verma",
      email: "priya@gmail.com",
      course: "Data Science",
      attendance: 88
    },

    {
      name: "Rahul Patil",
      email: "rahul@gmail.com",
      course: "AI & ML",
      attendance: 95
    }

  ];

  await Student.insertMany(students);

  res.send("Students Added Successfully");
});

app.get("/students", async (req, res) => {

  const students = await Student.find();

  res.json(students);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});