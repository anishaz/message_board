let express = require('express');

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(6789, () => console.log("The server is running on port 6789"));
