import React from "react";
import { IonIcon } from "@ionic/react"; 
import { home } from "ionicons/icons"; 
import herobanner from "../../assets/images/hero-banner.png"
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <IonIcon icon={home} />
            <span>Real Estate Agency</span>
          </p>

          <h2 className="h1 hero-title">Find Your Dream House By Us</h2>

          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <button className="btn">Make An Enquiry</button>
        </div>

        <figure className="hero-banner">
          <img src={herobanner} alt="Modern house model" className="w-100" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
