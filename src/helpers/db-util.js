import { MongoClient } from "mongodb";

export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://testi:testi@cluster0.xcwm9pa.mongodb.net/meetups_db?retryWrites=true&w=majority'
    )
}