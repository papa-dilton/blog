import styles from '@/styles/All-posts.module.css'
import { getAllPosts } from '@/utils/getPosts'
import { Post } from '@/Types'

export default function AllPostsPage() {
    const posts = getAllPosts()
    return (
        <>
        <a href="/"><button>Home</button></a>
        <h1 className={styles.header} >All Posts</h1>
        {posts.map((post: Post) => {
            return (
                <div className={styles.post}>
                    <h2 className={styles.title}>{post.title}</h2>
                </div>
            )
        })}
        </>
    )
}