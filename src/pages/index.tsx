import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Index.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={styles.head}>Hello, World!</h1>
      <a href="all-posts"><button>All Posts</button></a>
    </>
  )
}
