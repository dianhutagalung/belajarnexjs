import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Image from 'next/image'
import gambar from '../public/spom.png'
import Test from './Test'


export const index = () => {

  return (
  
    <Layout pageTitle='Home Page'>
      <Image src={gambar} width={200} height={200} alt='spom'/>
      
      <h1>asiapp</h1>
    </Layout>
  )
}

export default index

