const mongoose = require('mongoose');

const MONGO_URI=`mongodb+srv://miguelfernandes1410:Miguel1410.@nodetestcluster.rlcdm.mongodb.net/`;


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;
