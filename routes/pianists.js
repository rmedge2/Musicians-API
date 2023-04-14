var express = require('express');
var router = express.Router();
const fs = require('fs');

const PIANISTS_FILE = './data/pianists.json';

// Getting a listing of the pianists
router.get('/', function(req, res) {
  fs.readFile(PIANISTS_FILE, 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        res.status(500).send('There is a problem reading the file');
        return;
    }
    res.json(JSON.parse(data))
  })
});

// Getting a pianist by id
router.get('/:id', (req, res) => {
    fs.readFile(PIANISTS_FILE, 'utf-8', (err,data)=>{
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

// Post a new pianist
router.post('/', (req,res) => {
    fs.readFile(PIANISTS_FILE,'utf-8', (err, data) => {
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.');
            return;
        }
        const pianists = JSON.parse(data);
        // Create new pianist file with data

        const newPianist = {
            id: (pianists.length + 1).toString(),
            instrument: req.body.instrument,
            name: req.body.name,
            birthYear: req.body.birthYear,
        };

        pianists.push(newPianist)
        res.send(pianists)

        fs.writeFile(PIANISTS_FILE, JSON.stringify(pianists), (err)=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem writing to the file.');
                return;
            }
            res.json(newPianist)
        })
    })


})

module.exports = router;