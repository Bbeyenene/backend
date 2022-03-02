const express = require('express')
//const cors = require('cors');

const app = express()
app.use(express.json())
//app.use(cors)

// app.use('/', (req, res)=>{
//     res.send('Hello world')
// })
app.get('/api', (req, res)=>{
    res.json({mesg: 'this is a message from the backend'})
})

app.listen(8080, ()=>console.log('server listining a prto 8080'))