const mongoose = require('mongoose')

exports.db = async function db() {
    try {
        await mongoose.connect('mongodb://localhost/livereload-api-crud', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
}