const mongoose = require('mongoose');

const url = process.env.MONGO_URI

console.log('Connecting to', url)

if (!url) {
    console.error('MongoDB URI is not defined. Please set MONGODB_URI in your .env file.');
    process.exit(1); // Exit the application if URI is not defined
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const appSchema = new mongoose.Schema({
    name: String,
    description: String,
    details: String,
    apk: String,

})

const App = mongoose.model("App", appSchema)

module.exports = App