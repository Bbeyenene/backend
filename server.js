const express = require('express')

const app = express()
app.use(express.json())

app.get('/api', (req, res)=>{
    res.json({mesg: 'Message from the backend'})
})
app.get('/products', (req, res)=>{
    res.json({
        "firstName": "John",
        "lastName": "Smith",
        "isAlive": true,
        "age": 27,
        "address": {
          "streetAddress": "21 2nd Street",
          "city": "New York",
          "state": "NY",
          "postalCode": "10021-3100"
        },
        "phoneNumbers": [
          {
            "type": "home",
            "number": "212 555-1234"
          },
          {
            "type": "office",
            "number": "646 555-4567"
          }
        ],
        "children": [],
        "spouse": null
      })
})

app.listen(3000, ()=>console.log('server listining a prto 3000'))