const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
const url ='mongodb://localhost:27017/easy-notes'

    
mongoose.connect(url,{useNewUrlParser : true ,useUnifiedTopology : true},(err)=>{
    if(!err){
        console.log("mongodb is connected")
    }else{
        console.log("alert error"+err)
    }
})

require('./easynotes.model')