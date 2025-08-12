import React from "react";
import Marquee from "react-fast-marquee";
import "../css/MarqueeSlider.css"; // custom styles


const data = [
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/cc/88/58/cc8858ff-e318-d96e-8a1a-a15dad8f5dbf/media-ST_GC_0157-9764864-Artwork-iOS-323746.png/417x236.jpg",
    title: "Strength with Gregg",
    tag: "Fitness+"
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/c5/84/4f/c5844f78-6490-2bcf-7f3b-1188f6a0288a/3a7bc10c-b414-498d-9b78-d21ab4efbe70.png/417x236.jpg",
    title: "A-List Pop",
    tag: "Music"
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/89/07/9c/89079c5b-29da-cd1f-4ce3-ad68f3d28a68/f0346506-4c9f-4be1-b275-11fa4004b103.png/417x236.jpg",
    title: "Balatro+",
    tag: "Arcade"
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/03/36/de/0336dec4-8cdd-f206-03ce-4b68bdf29737/e0e01f1e-d50c-4154-835a-f1766ffa89da.png/417x236.jpg",
    title: "Adventure Quest",
    tag: "Arcade"
  }
];

const MarqueeSlider = () => {
  return (
    <div className="marquee-container">
      <Marquee speed={80} gradient={false}>
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="card-info">
              <span>{item.title}</span>
              <span className="tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
