import { getSession } from 'next-auth/react'
import Head from 'next/head'
import AddUser from '../components/AddUser'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

// inject props
export default function Home({session}) {

  if(!session) return <Login/>

  return (
    <>
      <Head>
        <title>User Management App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        <AddUser/>
      </main>
    </>
  )
}

// server side render & auth
export async function getServerSideProps(context){
  const session = await getSession(context)
  return{
    props: {session}
  }
}