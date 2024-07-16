const express = require("express");
const app = express();

app.use(express.json())

const students = [
  {
    id: 1,
    name: "arun",
    gender: "Male",
    physics: 88,
    maths: 87,
    english: 78,
  },
  {
    id: 2,
    name: "rajesh",
    gender: "Male",
    physics: 96,
    maths: 100,
    english: 95,
  },
  {
    id: 3,
    name: "moorthy",
    gender: "Male",
    physics: 89,
    maths: 90,
    english: 70,
  },
  {
    id: 4,
    name: "raja",
    gender: "Male",
    physics: 30,
    maths: 25,
    english: 40,
  },
  {
    id: 5,
    name: "usha",
    gender: "Female",
    physics: 67,
    maths: 45,
    english: 78,
  },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/students/:id", (req, res) => {
  let id = req.params.id;
  //   res.json(students[id - 1]);
  let student = students.find((s) => {
    return s.id == id;
  });
  //   res.json(student);

  if (!student) {
    res.status(404).send("Student not found");
  } else {
    res.json(student);
  }
});

app.post("/students", (req, res) => {
  const id = students.length + 1;
  const name = req.body.name;
  const gender = req.body.gender;
  const physics = req.body.physics;
  const maths = req.body.maths;
  const english = req.body.english;

  const student = { id, name, gender, physics, maths, english };
  students.push(student);

  res.json(students);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
