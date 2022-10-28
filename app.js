const express = require('express')
const tasks = require('./routes/tasks')
//initialise expree
const app = express()
//middleware. The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
app.use(express.json())
//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})
app.use('/api/v1/tasks',tasks)
const port = 3000;
app.listen(port, console.log(`The server is listening on  port ${port}`));