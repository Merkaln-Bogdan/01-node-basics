const mongodb = require('mongodb');
const {MongoClient} =mongodb;
const MONGODB_URL = 'mongodb+srv://Merk_admin:radomelfalcao33@cluster1.bznl8.mongodb.net/mongoDataBase03?retryWrites=true&w=majority'
const DB_Name ="nodeDataBase03" 
 async function main() {
   const client = await MongoClient.connect(MONGODB_URL)
   console.log('succesfuly connected')
   const db = client.db(DB_Name)
   const exampleColection = db.collection('exampleColection')
   await exampleColection.insertMany([{
       name: "Rivaldo",
       email: "rivaBars@gmail.com",
       number: "45-47-585"
   }])
 }
 main()