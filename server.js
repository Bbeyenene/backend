const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({mesg: 'this is a message from the backend'})
})

app.listen(3000, ()=>console.log('server listining a prto 3000'))