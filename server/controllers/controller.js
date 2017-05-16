var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {
  index: (req,res) => {
    Message.find({}, (err, messages) => {
      if (err){
        console.log(err);
        return;
      }
      res.render('index', {messages: messages});
    })
  },

  create: (req,res) => {
    var message = new Message(req.body);
    message.save(function(err){
      if (err){
        console.log(err);
        return;
      }
      res.redirect('/');
    })
  }

}
