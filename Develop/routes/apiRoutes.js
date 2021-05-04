const notes = require('../db/db.json');

module.exports = (app) => { 
    // Filling out API routes
    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware
        notes.push(req.body);
        res.json(true);
      });
}