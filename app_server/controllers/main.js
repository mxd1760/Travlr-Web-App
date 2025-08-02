
// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept':'application/json'
  }
}

/* GET homepage */
const index = (req,res)=>{
  res.render('index',{title: "Travlr Getaways"});
};


/* GET travel view */
const travel = async function (req,res,next){
  // console.log("RUN")
  await fetch(tripsEndpoint,options)
  .then((res)=> {
    // console.log("JSON")
    return res.json()
  })
  .then((json)=>{
    // console.log("RENDER")
    let message =null;
    if (!(json instanceof Array)){
      message = 'API lookup error';
      json = [];
    }else{
      if (!json.length){
        message = "no trips exist in our database!";
      }
    }
    res.render("travel",{title: 'Travlr Getaways',trips:json,message})
  })
  .catch((err)=>{
    console.log("ERROR",err)
    res.status(500).send(err.message)
  });
};

const rooms = (req,res)=>{
  res.render('rooms',{title: 'Travlr Getaways'})
}

const meals= (req,res)=>{
  res.render('meals',{title: 'Travlr Getaways'})
}

const news = (req,res)=>{
  res.render('news',{title: 'Travlr Getaways'})
}

const about = (req,res)=>{
  res.render('about',{title: 'Travlr Getaways'})
}

const contact = (req,res)=>{
  res.render('contact',{title: 'Travlr Getaways'})
}


module.exports = {
  index,travel,rooms,meals,news,about,contact
}