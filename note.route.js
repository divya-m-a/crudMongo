module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    //create 
    app.post('/notes',notes.create);

    //retrive
   app.get('/notes/find',notes.findAll);

    //single record retrive
    app.get('/notes/:noteId', notes.findOne);


    //update record
    app.put('/notes/:noteId',notes.update);

    //delete record
    app.delete('/notes/:noteId',notes.delete);


}