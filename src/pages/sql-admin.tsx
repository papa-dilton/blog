import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function sqlAdmin() {
    return (
        <>
        <form method='post'>
            <input type='text' name='query' id='sqlQuery'></input>
            <input type='submit'></input>
        </form>
        </>
    )
}