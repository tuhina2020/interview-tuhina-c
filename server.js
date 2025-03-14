const express = require('express')
const app = express()
const port = 3000
const { Employee } = require("./employee")
const employee = new Employee();

app.use(express.json());

app.get('/employee', (req, res) => {
  res.send('Hello World!')
})

app.get('/employee/:employeeId', (req, res) => {
    console.log("REQUEST PARAMS")
    console.log(req.params);
    var { employeeId } = req.params;
    const entry = employee.getEmployee(employeeId);
    res.send(entry);
  })

app.post('/employee', (req, res) => {
    console.log("REQUEST")
    console.log(req.body);
    const entry = employee.createEmployee(req.body, {}, "7890");
    res.send(entry);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
