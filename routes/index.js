var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = "mongodb://localhost:27017/todoapp";
mongoose.connect(db);

// models
var Todo = require('../model/todo');

/* GET home page. */
//show
router.get('/', function(req, res, next) {
  Todo.find({}).sort('-createdAt').exec(function(err, data){
    res.render('index', {todoList: data});
  })
});

//create
router.post('/', function(req, res, next) {
  Todo.create({task: req.body.task}, function(err, data) {
    if(err) {
      console.log(err);
    }
    else {
      res.redirect('/');
    }
  });
});

//put
router.put('/update', function(req, res){
  Todo.findOne({_id:req.body.id}, function(err, obj) {
    obj.status = true;
    obj.save();
    res.send(true);
  })
  
});

module.exports = router;
