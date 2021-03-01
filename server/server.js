// const express = require('express')
// const path =require('path')
// const exp
// const app = express()

// require('./models/Db')
// app.get('/',(req,res)=>{
//     res.send("cool")
// })
// const rou = require('./controller/emp_contoller')
// app.use('/emp',rou)

// //port config
// app.listen(3000,()=>console.log("this server is up"))


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
const routes=require('./routes/note.routes')

app.use('/api',routes)

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});