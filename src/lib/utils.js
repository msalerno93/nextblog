const { default: mongoose } = require("mongoose")

const connection = {}

export const connectToDB = async() => {
    try {
        if(connection.isConnected){
            console.log("User connected");
            return;
        }
        const db = await mongoose.connect(provess.env.MONGO_URL)
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.log(error);
    }
}