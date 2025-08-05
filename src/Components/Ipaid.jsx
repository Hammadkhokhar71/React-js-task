import React from 'react'
import '../css/Ipaid.css';
import iphoneImage from '../../src/ipone_lpgo.png'; // Adjust the path as necessary

const Ipaid = () => {
  return (
    <div>
      <div className="main-card">
           <div className='ipaid-card-two'>
          <div class="product-section">
            <img src={iphoneImage} alt="" />
            {/* <p>Apple Watch Series 10.</p> */}
            <p>Thinstant classic.</p>
            <div class="buttons">
              <a href="#" class="learn-more">Learn more</a>
              <a href="#" class="buy">Buy</a>
            </div>
          </div>
        </div>
        <div className='ipaid-card-one'>
          <div class="event-section">
            <h2 class="card_air-pord">AirPods Pro 2</h2>
            <p class="card_sub-heading">Now with a Hearing Aid feature.</p>
            <a href="#">Learn more</a>
          </div>
        </div>
     

      </div>
    </div>
  )
}

export default Ipaid
