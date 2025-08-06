import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import stick from '../../src/stick.jpg' ; 
import Flim from '../../src/Flim.jpg' ;
import foundation from '../../src/foundation.jpg' ;
import football from '../../src/football.jpg' ;
import buccaneers from '../../src/buccaneers.jpg' ;
import hockey from '../../src/hockey.jpg' ;
import "../css/Slider.css";

const players = [
  { name: "Messi", img: `${stick}` },
  { name: "Ronaldo", img: `${Flim}` },
  { name: "Ramos", img: `${foundation}` },
  { name: "Other", img: `${football}` },
  { name: "Other", img: `${buccaneers}` },
  { name: "Other", img: `${hockey}` },
];

const Slider_one = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // fade: true,
    centerMode: true,
    centerPadding: "200px",

  };

  return (
    <div className="mls-slider">
      <Slider {...settings}>
        {players.map((player, index) => (
          <div key={index} className="slider-slide">
            <img src={player.img} alt={player.name} className="player-img" />
            <div className="overlay">
              <div className="text-group">
                <h2>MLS Season Pass</h2>
                <p>Watch every club, every match, live—all season long.</p>
                <button>See the schedule</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Slider_one;
