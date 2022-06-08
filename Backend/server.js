const express = require('express');
const bodyParser = require('body-parser');
// create express app
const cors = require('cors');

const app = express();
// Setup server port
const port = process.env.PORT || 8000;

const corsOptions ={
  origin:'http://localhost:3002', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root routen
app.get('/', (req, res) => {
  res.send("Hello World");
}); 
// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)

// listen for requests 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});