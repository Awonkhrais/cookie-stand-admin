import { useState } from 'react'

export default function Main() {

    const [cookieStand, setCookieStand] = useState([]);
  
    function createBranch(event) {
      event.preventDefault()
  
      const branchInfo = {
        location: event.target.location.value,
        minCust:event.target.minimum.value,
        maxCust:event.target.maximum.value,
        avgCooki:event.target.average.value
  
      }
      setCookieStand([...cookieStand, branchInfo])
    }
return(

    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
    <div className="m-8 w-5/6 h-auto rounded-md bg-green-300">
      <h2 className="text-center text-xl m-4">Create Cookie Stand</h2>
      <form onSubmit={createBranch} className="">
        <label className="mr-2.5">Location</label>
        <input name="location" className="w-11/12"></input>
        <div className="grid grid-cols-4 place-items-center mt-4 mb-4">
          <section>
            <label className="block">Minimum Customers per Hour</label>
            <input name="minimum" className="block w-56"></input>
          </section>
          <section>
            <label className="block">Maximum Customers per Hour</label>
            <input name="maximum" className="block w-56"></input>
          </section>
          <section>
            <label className="block">Average Cookies per Sale</label>
            <input name="average" className="block w-56"></input>
          </section>
          <button className="bg-green-500 w-56 h-14">Create</button>
        </div>
      </form>
    </div>
    <h3 className="">Report Table Coming Soon...</h3>
    <div className="flex flex-col text-center">
      {
          cookieStand.map(item => {
            return(
              
                <p class="m-2">{JSON.stringify(item)}</p>
              
            )
          })
        }

    </div>
  </main>
    )
}