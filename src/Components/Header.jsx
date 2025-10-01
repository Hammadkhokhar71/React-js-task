import React, { useEffect, useState } from "react";
import "../css/header.css";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = (menu) => setActiveMenu(menu);
  const handleLeave = () => setActiveMenu(null);

  return (
    <header>
      <nav className="navbar">
        <div className="main">
          {/* Apple Logo */}
          <div className="logo">
            <svg
              height="44"
              viewBox="0 0 14 44"
              fill="white"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802z"></path>
            </svg>
          </div>

          {/* Nav Links */}
          <ul className="nav-links">
            <li
              onMouseEnter={() => handleEnter("Mac")}
              onMouseLeave={handleLeave}
            >
              <a href="#">Mac</a>
              {activeMenu === "Mac" && (
                <div className="mega-menu">
                  <div className="mega-content">
                    {/* Column 1 */}
                    <div className="mega-col">
                      <h4>Explore Mac</h4>
                      <a href="#">Explore All Mac</a>
                      <a href="#">MacBook Air</a>
                      <a href="#">MacBook Pro</a>
                      <a href="#">iMac</a>
                      <a href="#">Mac mini</a>
                      <a href="#">Mac Studio</a>
                      <a href="#">Mac Pro</a>
                      <a href="#">Displays</a>
                      <div className="sub-links">
                        <a href="#">Compare Mac</a>
                        <a href="#">Switch from PC to Mac</a>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="mega-col">
                      <h4>Shop Mac</h4>
                      <a href="#">Shop Mac</a>
                      <a href="#">Help Me Choose</a>
                      <a href="#">Mac Accessories</a>
                      <a href="#">Apple Trade In</a>
                      <a href="#">Financing</a>
                    </div>

                    {/* Column 3 */}
                    <div className="mega-col">
                      <h4>More from Mac</h4>
                      <a href="#">Mac Support</a>
                      <a href="#">AppleCare</a>
                      <a href="#">macOS Tahoe</a>
                      <a href="#">Apple Intelligence</a>
                      <a href="#">Apps by Apple</a>
                      <a href="#">Continuity</a>
                      <a href="#">iCloud+</a>
                      <a href="#">Mac for Business</a>
                      <a href="#">Education</a>
                      <a href="#">Accessibility</a>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Support</a></li>
          </ul>

          {/* Right Icons */}
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass"><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="44px" viewBox="0 0 15 44">
<path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
</svg></i>
            <i className="fa-solid fa-bag-shopping"><svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path></svg></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
