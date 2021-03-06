const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Surveys');
require('./Services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge : 30 * 24 * 60 * 60 * 1000,
        keys : [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authroutes')(app);
require('./routes/paymentroutes')(app);
require('./routes/surveyroutes')(app); 

if(process.env.NODE_ENV === 'production'){
    //Express will serve up production assets
    //like our main.js file  or main.css file
    app.use(express.static('client/build'))


    //Express will serve up index.html file
    //if it doesn't recognise the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

