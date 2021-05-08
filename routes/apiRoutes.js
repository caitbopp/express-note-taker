const fs = require('fs');
const shortid = require('shortid');
let notes = require('../db/db.json');

module.exports = (app) => { 
    // Filling out API routes
    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        const newNote = {
          id: shortid.generate(),
          title: req.body.title,
          text: req.body.text,
        };
        notes.push(newNote);
        console.log(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err)=> {
          if (err) throw err
        })
        res.json(true);
      });

     app.delete('/api/notes/:id', (req, res) => {
       notes = notes.filter(word => word.id !== req.params.id)
       fs.writeFile('./db/db.json', JSON.stringify(notes), (err)=> {
        if (err) throw err
      })
        res.json(true);
     })
    
}