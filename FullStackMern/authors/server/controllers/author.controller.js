// imports the author model
const Author = require('../models/author.model');
// exports all the following functions
module.exports= {
    getAllAuthors: (req, res) =>{
        Author.find()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getOneAuthor: (req, res) =>{
        Author.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    addAuthor: (req, res) =>{
        Author.create(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    updateAuthor: (req, res) =>{
        Author.updateOne(
            {_id: req.params.id}, 
            req.body, 
            {new: true, runValidators: true})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    },
    deleteAuthor: (req, res) =>{
        Author.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=> {
            console.log(err)
            res.status(400).json(err)
        })
    }
}
