import Head from 'next/head'
import Header from '../components/utils/header'

export default function Home() {
  return (
   <div>
     <Head>
       <title>ProtoTop-Create Manage Project,Teams</title>
     </Head>
     <Header/>
     <h1  className='text-3xl underline'>hello world</h1>
   </div>
  )
}
