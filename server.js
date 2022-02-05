const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("60f81af187c0b6140e52d103")
  .then(user => {
    req.user = new User(user.name, user.email, user.cart, user._id);
    next();
  })
  .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://rafaelpessoa12:' + process.env.MONGO_ATLAS_PW + '@cluster0.05jl7.mongodb.net/node_course?retryWrites=true&w=majority')
  .then(() => {
    app.listen(3000)
  })
  .catch(err => console.log(err));