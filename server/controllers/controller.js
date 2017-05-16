var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {
  index: (req,res) => {
    res.render('index');
  }
}
