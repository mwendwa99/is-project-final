const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const cors = require('cors');

const app = express();
const PORT = 5000;
uri = 'mongodb+srv://mwendwa99:lamboghinif2@cluster0.huhb3.mongodb.net/isprojectfinal?retryWrites=true&w=majority';

// connect frontend to backend
app.use(cors());

// for every userRoutes the path has to start with '/user'
app.use('/user', userRoutes);

// login token
app.use('/login', (req, res) => {
    res.send({
        token: 123,
    });
});

// connect to local db with mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => app.listen(PORT, () => {
    console.log(`connected to mongo and port: ${PORT}`)
})).catch((err) => console.log(err))

// app.listen(PORT, () => {
//     console.log(`app running on port: ${PORT}!`)
// });

// 404 page
app.use((req, res) => {
    res.send("yikes");
    // res.status(404).sendFile('./404.html', {root: __dirname});
});