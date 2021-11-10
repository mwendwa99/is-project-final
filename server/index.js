const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const orgRoutes = require('./routes/orgRoute');
const adminRoutes = require('./routes/adminRoute');
const spotRoutes = require('./routes/spotRoute');
const controllerRoute = require('./controller/controllerRoute');

// mongoose promise
mongoose.Promise = global.Promise

const app = express();
const PORT = 5000;
uri = 'mongodb://127.0.0.1:27017/isprojectfinal';

// connect frontend to backend
app.use(cors());
// parse requests of content type application/json
app.use(bodyParser.json());
// user route middleware
app.use('/api', userRoutes);
// organization route
app.use(orgRoutes);
// spot route
app.use(spotRoutes)
// admin route
app.use('/admin', adminRoutes);
// controllers
app.use(controllerRoute);

// connect to local db with mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => app.listen(PORT, () => {
    console.log(`connected to ${uri} via port: ${PORT}`)
})).catch((err) => console.log(err));


// 404 page
app.use((res) => {
    res.json({ status: "page does not exist bro!" });
});