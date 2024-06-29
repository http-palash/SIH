const express = require('express');
const dotenv = require('dotenv');
const app = express();

// first config
dotenv.config({path:'./database/config.env'});
// then check connection
require('./database/connection');

const PORT = process.env.PORT;
// converting json data to object
app.use(express.json());
// routing request
app.use(require('./routes/auth'));



app.listen(PORT,()=>{
    console.log(`server is runnning at port ${PORT}`);
})





  

