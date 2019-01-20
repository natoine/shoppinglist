var express = require('express')
var app = express()

const MongoClient = require('mongodb').MongoClient
// Connection URL
const url = 'mongodb://localhost:27017'
// Database Name
const dbName = 'shoppinglist'


MongoClient.connect(url, function(err, client) {
    if (err) throw err
    console.log("Connected successfully to server")
   
    const db = client.db(dbName)
    db.collection('items').insertOne({"label":"patate", "quantity":"10"}, function(err, res) {
        if (err) throw err
        console.log("1 item inserted")
        client.close()
      })
    
    //client.close()
  })


app.get('/', 
    function (request, response) 
    {
        response.send('Hello World!')
    }
)

app.get('/:truc', function (request, response) {
    
    response.send('Hello '+ request.params.truc + ' !')
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})