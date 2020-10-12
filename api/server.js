const express = require('express');
const {MongoClient} = require('mongodb')
const MONGODB_URL = 'mongodb+srv://Merk_admin:radomelfalcao33@cluster1.bznl8.mongodb.net/mongoDataBase03?retryWrites=true&w=majority'
const server = express()
const DB_Name ="nodeDataBase03" 

async function main() {
    server.listen(process.env.PORT, ()=>{
    console.log('Start listening port', process.env.PORT)
})
const client = await MongoClient.connect(MONGODB_URL)

const db = client.db(DB_Name)
const exampleColection = db.collection('exampleColection')
}