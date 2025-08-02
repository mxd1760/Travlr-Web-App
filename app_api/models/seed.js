const db = require("./db")
const schema = require("./travlr");

var fs = require('fs')
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'))
  
const seedDB = async ()=>{
  await schema.deleteMany({});
  await schema.insertMany(trips);
}

seedDB().then(async ()=>{
  await db.connection.close();
  process.exit(0);
})