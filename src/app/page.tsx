import {getPosts} from "@lib/mongo/posts";

export default function Home() {
    console.log(getPosts())
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}