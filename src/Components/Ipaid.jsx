import React from 'react'
import '../css/Ipaid.css';

const Ipaid = () => {
  return (
    <div>
     <div className='main-ipaid'>
        <div className='ipaid-card-one'>
          <div className='main-contant'>
          <div className=''><img src="https://www.apple.com/v/home/cd/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png" alt="" /></div>
            <div className="event-section-two">
                <p>Now Supercharged by the M3 chip</p>
                <div className="buttons-btn">
                    <a href="#" className="learn-more-btn">Learn more</a>
                    <a href="#" className="buy-btn-one">Buy</a>
                </div>
                </div>
          </div>
        </div>
        <div className='ipaid-card-two'></div>
     </div>
    </div>
  )
}

export default Ipaid
