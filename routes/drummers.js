var express = require('express');
var router = express.Router();
const fs = require('fs');

const DRUMMERS_FILE = './data/drummers.json';

// Getting a list of drummers
router.get('/', function(req, res, next) {
  fs.readFile(DRUMMERS_FILE, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        res.status(500).send('There is a problem reading the file');
        return;
    }
    res.json(JSON.parse(data))
  })
});

//Getting a single drummer by id:
router.get('/:id', (req, res) => {
  fs.readFile(DRUMMERS_FILE, 'utf-8', (err,data)=>{
    if(err){
      console.error(err);
      res.status(500).send('There is a problem reading the file');
      return;
    }
    const bassists = JSON.parse(data);
    const bassist = bassists.find(bassist => bassist.id === (req.params.id)) 
    console.log(req.params)
    if(!bassist){
      res.status(404).send('Bassist not found')
      return;
    }
    res.json(bassist)
    
  })
})

// Creating new drummer file with data
router.post('/', (req, res) => {
  fs.readFile(DRUMMERS_FILE, 'utf-8', (err, data) => {
    if(err){
      console.error(err);
      res.status(500).send('There is a problem reading the file');
      return;
    }

    const drummers = JSON.parse(data);
    
    // Now create a new drummer
    const newDrummer = {
      id: (drummers.length + 1).toString(),
      instrument: req.body.instrument,
      name: req.body.name,
      birthYear: req.body.birthYear
    };
    // Now add your new drummer to the array
    drummers.push(newDrummer)
    res.send(drummers)

    // Now write the new json file
    fs.writeFile(DRUMMERS_FILE, JSON.stringify(drummers), err => {
      if(err){
        console.error(err);
        res.status(500).send('There is a problem writing to the file')
      }
    })

  })
})

module.exports = router;