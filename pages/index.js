import Head from 'next/head'
// import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}