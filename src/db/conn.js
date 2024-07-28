const mongoose = require('mongoose');
const CONN_URL = process.env.CONNECTION_URL

exports.connectDb = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_URL}/${DB_NAME}`);
        console.log(`connecting to Mongo Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`error connecting to Mongo Host: ${error}`)
        process.exit(1);
    }
}

