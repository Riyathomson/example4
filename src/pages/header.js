import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const anu = [
  { url: "assets/img/hero-carousel/hero-carousel-1.jpg" },
  { url: "assets/img/hero-carousel/hero-carousel-2.jpg" },
  { url: "assets/img/hero-carousel/hero-carousel-3.jpg" },
  { url: "assets/img/hero-carousel/hero-carousel-4.jpg" },
  { url: "assets/img/hero-carousel/hero-carousel-5.jpg" },
];


function Header()
{
        return(
            <div>
              <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
              <a href="/" className="logo d-flex align-items-center">
                {/* Uncomment the line below if you also wish to use an image logo */}
               <img src="assets/img/logo.png" alt=""/> 
                <h1>UpConstruction<span>.</span></h1>
              </a>
              <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
              <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                    <ul>
                      <li><a href="#">Dropdown 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                        <ul>
                          <li><a href="#">Deep Dropdown 1</a></li>
                          <li><a href="#">Deep Dropdown 2</a></li>
                          <li><a href="#">Deep Dropdown 3</a></li>
                          <li><a href="#">Deep Dropdown 4</a></li>
                          <li><a href="#">Deep Dropdown 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Dropdown 2</a></li>
                      <li><a href="#">Dropdown 3</a></li>
                      <li><a href="#">Dropdown 4</a></li>
                    </ul>
                  </li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>{/* .navbar */}
            </div>
          </header>


   {/* ======= Hero Section ======= */}
   <section id="hero" className="hero">
            <div className="info d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h2 data-aos="fade-down">Welcome to <span>UpConstruction</span></h2>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a data-aos="fade-up" data-aos-delay={200} href="#get-started" className="btn-get-started">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
            
         <SimpleImageSlider id="hero-carousel" className="carousel slide footer"
          data-bs-ride="carousel" data-bs-interval={5000}
    
        width={"100%"}
        height={904}
        loop={true}
        autoPlay={true}
        images={anu}
        showBullets={true}
        showNavs={true}
      /> 
          </section>
          {/* End Hero Section */}
            </div>
        );
}
    

export default Header;