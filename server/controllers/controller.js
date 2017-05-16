var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {
  index: (req, res) => {
		Message.find({}).populate('comments').exec( (err, messages) => {
			if(err){
				console.log(err);
				return;
			}else{
				res.render('index', {messages: messages});
				return;
			}
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
  },

  createComment: (req,res) => {
    Message.findOne({_id: req.params.id}, (err, message) => {
      if(err){
        console.log(err);
        return;
      } else {
        var comment = new Comment(req.body);
        comment._message = message._id;
        comment.save( (err, savedComment) => {
          if (err){
            console.log(err);
            return;
          }else{
            message.comments.push(savedComment);
            message.save( (err, data) => {
              if (err){
                console.log(err);
                return;
              }else{
                res.redirect('/');
              }
            })
          }
        })
      }
    })
  }

}
