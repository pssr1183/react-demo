const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const students = [
  {rollnum:101,name:"Jaswanth",marks:35},
  {rollnum:102,name:"RVV",marks:55},
  {rollnum:103,name:"Chai Krishna",marks:75},
  {rollnum:104,name:"Pooooo bro",marks:95},

]; // Array to store student data

app.get('/getmarks/:rollNum',(req,res)=>{
  const roll = req.params.rollNum;
  const student = students.find((student)=>student.rollnum===parseInt(roll));
  if(student){
    res.status(201).json({marks:student.marks});
  }
  else{
    res.status(404).json({error:"Student not found"})
  }
});
// Endpoint to add a new student
app.post('/addmarks',(req,res)=>{
  const {rollNum,fullName,marks}= req.body;
  if(!rollNum||!fullName||!marks){
     res.status(403).json({
        error:'Please fill all'
    
  })
}
    else{
     const obj={
    rollnum:rollNum,
    name:fullName,
    marks:marks
  }
  students.push(obj);
  res.status(201).json({
    msg:'Stored Sucessfully'
      })
    }
})
console.log(students);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});