const Note = require('../models/note.model.js');

exports.create = (req,res) => {

const  note = new Note({
    title : req.body.title,
    content : req.body.content
});
//save in database
note.save().then(data =>{
    res.status(200).json({
        "message":"Created Successfully"
    });
}).catch(err =>{
    res.status(500).json({
        "error":err
    })
})

};
exports.findAll = (req, res) => {

    Note.find().then(notes => {

        res.status(200).json({
            "data":notes
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.findOne = (req,res) => {
    Note.findById(req.params.noteId).then(data =>{
        if(!data){
            return res.status(401).json({
                message : "not found"
            });
        }
        res.send(data);

    })

};
exports.update= (req,res) => {
    Note.findByIdAndUpdate(req.params.noteId,{
        title : req.body.title,
        content : req.body.content
    },{new : true}).then(data =>{
        if(!data){
            return res.status(401).json({
                message : "not found"
            });
        }
        res.send(data);

       
    })

};
exports.delete = (req,res) => {
    Note.findByIdAndRemove(req.params.noteId).then(data =>{
        if(!data){
            return res.status(401).json({
                message : "not found"
            });
        }
        res.status(200).json({
            message :" deleted Successfully"
        });

    })



};