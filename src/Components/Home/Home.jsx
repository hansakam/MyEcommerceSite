import React from 'react'
import background from "../assets/bg.jpg";


const Home = () => {
  return (
    <div className='hero'>
      <div class="card text-bg-dark border-0 ">
        <img src={background} class="card-img" alt="background"
        height="670px" />
        {/* <div class="card-img-overlay d-flex flex-column justify-content-center"> */}
        <div class="card-img-overlay d-flex flex-column ">
          <div className=" mr-50px">
          {/* <div className="container mr-50px"> */}
          <h5 class="card-title display-4 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className='card-text lead fs-2'>
            CHECK OUT ALL THE TRENDS
          </p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Home