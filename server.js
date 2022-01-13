//require express and mongoose 
const express = require('express');
const db = require('./config/connection');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

//connection to mongoose, if connection not established run it local host
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`************** Connected on localhost:${PORT} ************* `);
    });
})