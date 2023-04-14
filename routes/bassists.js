var express = require('express');
var router = express.Router();
const fs = require('fs');

const BASSISTS_FILE = './data/bassists.json';

router.get('/', function(req, res, next) {
  fs.readFile(BASSISTS_FILE, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        res.status(500).send('There is a problem reading the file');
        return;
    }
    res.json(JSON.parse(data))
  })
});

// Request a bassist by id
router.get('/:id', (req, res) => {
  fs.readFile(BASSISTS_FILE, 'utf-8', (err,data)=>{
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


// We will now post a new drummer 
router.post('/', (req, res) => {
  fs.readFile(BASSISTS_FILE, 'utf-8', (err,data) => {
    if(err){
      console.error(err);
      res.status(500).send('There is a problem reading the file');
      return;
    }

    // Parse your json data, turning it into an array
    const bassists = JSON.parse(data);

    // Make your new bassist 
    const newBassist = {
      id: (bassists.length + 1).toString(),
      instrument: req.body.instrument,
      name: req.body.name,
      birthYear: req.body.birthYear
    }
    // Add your new bassist to your bassists array
    bassists.push(newBassist)
    res.send(bassists);

    // Finally, write the new bassist json file

    fs.writeFile(BASSISTS_FILE, JSON.stringify(bassists), err => {
      if(err){
        console.error(err);
        res.status(500).send('There was a problem writing to the file');
        return;
      }
      res.json(newBassist)
    })
  })
})

module.exports = router;