const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB);
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopoly:true,
    useFindAndModify:false
}).then(()=>{
    console.log('success')
}).catch((err)=>console.log('no connection'));

// module.exports = mongoose;

