import { Post } from '@/Types'
import { Schema, model, connect } from 'mongoose';

process.env.MONGO_URL = 'mongodb://localhost:27017/test'

const postSchema = new Schema<Post>()
const UsersTable = model<Post>('Post', postSchema)

export async function getAllPosts() {
    if (process.env.MONGO_URL == undefined) {
        throw new Error('MONGO_URL is undefined')
    }
    await connect('mongodb://localhost:27017/test')
    const posts = await UsersTable.find()
    return posts
}