module.exports = (app) => {
    const notes = require('../controller/note_contoller');

    app.post('/notes', notes.create)

    app.get('/notes', notes.findAll)

    app.get('/notes/:noteId', notes.findOne)
    
    app.delete('/notes/:noteId', notes.delete)
}  