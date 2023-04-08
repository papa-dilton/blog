import ClientComponent from './ClientComponent'

export default function serverSide() {
    console.log("hello, server!")
    return (<ClientComponent />)
}