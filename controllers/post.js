const db = require('../models');

const index = (req, res)=> {
  db.post.find({}, (err, foundPosts) => {
    if (err) console.log(err)
    res.json(foundPosts)
  });
}

const show = (req, res) => {
    db.Post.findById(req.params.id, (err, foundTodo) => {
        if (err) console.log('Error in games#show:', err);
        res.json(foundTodo);
    });
};

const create = (req, res) => {
    db.Post.create(req.body, (err, savedTodo) => {
        if (err) console.log('Error in games#create:', err);
        res.json(savedTodo)
    });
};

const update = (req, res) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTodo) => {
        if (err) console.log('Error in games#update:', err);
        res.json(updatedTodo)
    });
};

const destroy = (req, res) => {
    db.Post.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
        if (err) {
          console.log('Error in games#destroy:', err);
        } else {
          res.json(deletedTodo)
        }
    });
};

module.exports = {
    user,
    
};