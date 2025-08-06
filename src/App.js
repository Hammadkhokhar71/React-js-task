import logo from './logo.svg';

import './App.css';
import Text from './Components/Text';
import Header from './Components/Header'; 
import Banner from './Components/Banner'; 
import Navbar from './Components/Navbar'; 
import Bannertwo from './Components/Bannertwo'; 
import applelogo from '../src/logo-iphone.png';
import Iphonecard from './Components/Iphonecard'; 
import Ipaid from './Components/Ipaid'; 
import Slider from './Components/Slider';

function App() {
  return (
    <>
      <Header/>
      <Banner
  bgimg="https://www.apple.com/v/home/cd/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg"
  title="iPhone 16 Pro Max"
  subtitle="Built for Apple Intelligence"
  button1={{ text: "Learn More", link: "", type: "primary" }}
  button2={{ text: "Learn More", link: "", type: "outline" }}
/>
      <Banner
  bgimg="https://www.apple.com/v/home/cd/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_large.jpg"
  title="iPhone 16 Pro Max"
  subtitle="Built for Apple Intelligence"
  button1={{
    text: "Learn More",
    link: "",
    type: "primary",
    bgColor: "white",  
    textColor: "black",  
    outlineColor: "#ff5733" 
  }}
  button2={{
    text: "Learn More",
    link: "",
    type: "outline",
    bgColor: "", 
    textColor: "white",  
    outlineColor: "white"  
  }}
/>
      <Banner
      imglogo={applelogo}
  bgimg="https://www.apple.com/v/home/cd/images/heroes/apple-watch-series-10/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_large.jpg"
  title=""
  subtitle="Thinstant classis"
   titleColor="black" 
  subtitleColor="black"
  button1={{ text: "Learn More", link: "", type: "primary" }}
  button2={{ text: "Learn More", link: "", type: "outline" }}
/>
       <Iphonecard/> 
       <Ipaid/>
      {/* <Text/> */}
      <Slider/>
      
    </>
  );
}

export default App;
