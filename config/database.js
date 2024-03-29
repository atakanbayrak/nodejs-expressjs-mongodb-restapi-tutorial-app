const mongoose = require('mongoose');

//database connection
const db = () => {
    mongoose.connect(process.env.MONGO, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("mongoDB connected")
    }).catch((err) =>{
        console.log(err);
    })
}
module.exports = db