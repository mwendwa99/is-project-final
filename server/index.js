const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 5000;
const uri = 'mongodb+srv://mwendwa99:lamboghinif2@cluster0.huhb3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// for every userRoutes the path has to start with '/user'
app.use('/user', userRoutes);

// connect to local db with mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`app running on port: ${PORT}!`)
});