const port = 5000
const app = require('./app');
const mongoose = require('mongoose');
const imageSchema = require('./models/imagepost');
const postSchema = require('./models/instapost');
const uri = "mongodb://localhost:27017/myproject";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("Connected to MongoDB");
});



app.listen(port, () => console.log(`App listening on port ${port}!`));
