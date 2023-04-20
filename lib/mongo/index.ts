import {MongoClient} from "mongodb";

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error("MongoDB URI is not defined")

let client: MongoClient = new MongoClient(URI, options)
let clientPromise;

// Only reconnect if in production
if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise