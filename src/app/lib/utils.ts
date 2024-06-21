import mongoose, { Connection } from "mongoose";
let cachedConnection: Connection | null = null;

export const connectToDB = async () => {
    if (cachedConnection){
        console.log("Using cached connection");
        return cachedConnection;
    }
    try {
        const db = await mongoose.connect(process.env.DB_URL!);
        cachedConnection = db.connection;
        console.log("New mongodb connection created");
        return cachedConnection;
    } catch (e) {
        console.log(e);
        throw e;
    }
};
