import Link from 'next/link';
import Head from 'next/head';
import Footer from './Footer';
import Form from './CreateForm';
import Table from './ReportTable';
import Header from './Header';
import { hours } from '../assets/time';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function CookieStandAdmin(props) {

// const [cookieStand, setCookieStand] = useState([]);

  // function createBranch(event) {
  //   event.preventDefault()

  //   const branchInfo = {
  //     location: event.target.location.value,
  //     cookie_data: cookiesSalesPerHour(event.target.minimum.value, event.target.maximum.value, event.target.average.value, hours.length)

  //   }
  //   setCookieStand([...cookieStand, branchInfo])
  // }
  
  // function customerPerHour(min, max) {

  //   return (Math.random() * (max - min + 1) + min) 
  
  // }


  // function cookiesSalesPerHour(min, max, avg, hours_length) {
  //   let branch_sales = []
  //   for (let i = 0; i < hours_length; i++) { 

  //     branch_sales.push(Math.floor(customerPerHour(min, max) * avg)) 
  //   }
  //   return branch_sales
  // }



  // function subTotals(hours, sales) {
  //   let subtotal_hourly = []

  //   for (let i = 0; i < hours.length; i++) {

  //     let hour_subtotal = 0

  //     for (let j = 0; j < sales.length; j++) { 
  //       hour_subtotal += sales[j].cookie_data[i] 
  //     }
  //     subtotal_hourly.push(hour_subtotal)
  //   }
  //   return subtotal_hourly
  // }

  // function totalCookies(hourly_data) {
  //   let total = 0
  //   for (let i = 0; i < hourly_data.length; i++) { 
  //     total += hourly_data[i]
  //    }
  //   return total
  // }

    
    async function Post_request(data){
      const config = {headers: {'Authorization': 'Bearer ' + props.token}};
      const response = await axios.post('https://cookies-api-2.herokuapp.com/api/v1/cookie-stands/', data, config);
      if (response.status == 201){
      }
      
  
      }
  
      async function remove_requst(id){
        const config = {headers: {'Authorization': 'Bearer ' + props.token}};
        const response = await axios.post('https://cookies-api-2.herokuapp.com/api/v1/cookie-stands/', data, config);
        if (response.status == 201){
        }
        
    
        }
  

    
 
    
  
    return (
      <div className="">
  
        <Head>
          <title>Cookie Stand Admin</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header/>
  
        <main className=" flex flex-col my-10 justify-center mx-auto h-full items-center">
  
          <Form />
  
          <Table />
  
        </main>
  
        <Footer />
      </div>
    )
  }