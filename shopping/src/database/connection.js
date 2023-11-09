const mongoose = require('mongoose');
const { DB_URL } = require('../config');
const dotEnv = require('dotenv')
 dotEnv.config()
module.exports = async() => {

    try {
        console.log(process.env.MONGODB_URI)
        await mongoose.connect(DB_URL+'', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 