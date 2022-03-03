const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        mongoose.connect(process.env.mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err) => {
            if(err) throw err;
            console.log("DB UP");
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB ;