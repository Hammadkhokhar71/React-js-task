import React from 'react';
import '../css/Banner.css';

const Banner = ({ 
  imglogo = "", 
  bgimg = "", 
  title = "", 
  subtitle = "", 
  titleColor = "", 
  subtitleColor = "", 
  button1 = { text: "", link: "", type: "primary", bgColor: "", textColor: "", outlineColor: "" }, 
  button2 = { text: "", link: "", type: "outline", bgColor: "", textColor: "", outlineColor: "" } 
}) => {
  return (
    <div>
      <div className='first' style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="banner">
          {/* Only render image-logo div if imglogo exists */}
          {imglogo && (
            <div className="image-logo">
              <img src={imglogo} alt="Logo" />
            </div>
          )}

          <div className="title" style={{ color: titleColor || '' }}>{title}</div>  

          <div className="subtitle" style={{ color: subtitleColor || '' }}>{subtitle}</div>  

          <div className="buttons">
            {button1.text && (
              <a
                href={button1.link}
                className={`btn ${button1.type === 'primary' ? 'btn-primary' : 'btn-outline'}`}
                style={{ 
                  backgroundColor: button1.bgColor || '', 
                  color: button1.textColor || '', 
                  borderColor: button1.outlineColor || '' 
                }}
              >
                {button1.text}
              </a>
            )}
            {button2.text && (
              <a
                href={button2.link}
                className={`btn ${button2.type === 'primary' ? 'btn-primary' : 'btn-outline'}`}
                style={{ 
                  backgroundColor: button2.bgColor || '', 
                  color: button2.textColor || '', 
                  borderColor: button2.outlineColor || '' 
                }}
              >
                {button2.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Banner;
