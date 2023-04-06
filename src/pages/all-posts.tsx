import styles from '@/styles/All-posts.module.scss'
import { getAllPosts } from '@/utils/getPosts'
import { Post } from '@/Types'

export default function AllPostsPage() {
    let posts : Post[] = [];
    getAllPosts().then((data) => {posts = data})
    return (
        <>
        <a href="/"><button>Home</button></a>
        <h1 className={styles.header} >All Posts</h1>
        { posts.map((post: Post) => {
                return (
                    <div className={styles.postTitle}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postBody}>{post.body}</p>
                </div>
            )
        })
    }
        </>
    )
}