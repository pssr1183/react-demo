const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package.



// Middleware for enabling CORS
const app = express();
const port = 5000; // You can change this to any port you prefer.
app.use(cors());

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Data storage (an array of student objects)
const students = [
    { rollNumber: '101', name: 'John Doe', marks: 85 },
  { rollNumber: '102', name: 'Jane Smith', marks: 92 },
  { rollNumber: '103', name: 'Bob Johnson', marks: 78 },
];

// Endpoint to retrieve a student's marks by roll number
app.get('/students/:rollNumber', (req, res) => {
  const rollNumber = req.params.rollNumber;
  const student = students.find((s) => s.rollNumber === rollNumber);

  if (student) {
    console.log(student);
    res.json(student);
} else {
    res.status(404).json({ error: 'Student not found' });
  }
});


// Endpoint to add a student and their marks


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
