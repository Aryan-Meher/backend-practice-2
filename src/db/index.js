import mongoose from 'mongoose';
import dns from "node:dns";
import { DB_NAME } from "../constants.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing from .env")
        }

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
            { serverSelectionTimeoutMS: 10000 }
        )
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error:",error);
        process.exit(1)
    }
}

export default connectDB
