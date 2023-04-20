import clientPromise from '@lib/mongo/index';

let client
let db
let posts

async function connect() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        posts = await db.collection('posts')
    } catch (error) {
        console.log("Failed to connect to MongoDB")
    }
}


export async function getPosts() {
    await connect()
    return await posts.find({}).toArray()
}