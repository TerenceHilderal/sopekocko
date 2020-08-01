const Sauces = require('../models/sauces')

// exports.createSauce = (req, res, next) => {
//   const newSauce = new Sauces({

//   })
// }

// exports.modifySauce = (req, res, next) => {
//   Sauces.updateOne()
// }
exports.getAllSauce = (req, res, next) => {
  Sauces.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }))
};

exports.getOneSauce = (req, res, next) => {
  Sauces.findOne(_id = req.params.id)
    .then(sauce => res.Status(200).json(sauce))
    .catch(error => res.status(400).json({ error }))
};

exports.deleteSauce = (req, res, next) => {
  Sauces.deleteOne(_id = req.params.id)
    .then(() => res.status(200).json({ message: 'La sauce a été supprimée!' }))
    .catch(error => res.status(400).json({ error }))
};

// exports.likeSauce =(req,res,next)=>{

// }