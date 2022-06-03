const mongodb = require('mongodb'); 

const MongoClient =mongodb.MongoClient

const mongoConnect =(callback)=>{

  MongoClient.connect(
    'mongodb+srv://test:123456789a@cluster0.sle1q.mongodb.net/?retryWrites=true&w=majority'
    )
  .then(client => {
    console.log('Connected')
    callback(client)
  })
  .catch(err => console.log(err))
}

module.exports = mongoConnect