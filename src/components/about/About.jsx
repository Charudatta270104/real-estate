import React from "react";
import { IonIcon } from "@ionic/react"; 
import {
  homeOutline,
  leafOutline,
  wineOutline,
  shieldCheckmarkOutline,
} from "ionicons/icons"; 
import banner1 from "../../assets/images/about-banner-1.png";
import banner2 from "../../assets/images/about-banner-2.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={banner1} alt="House interior" />
          <img
            src={banner2}
            alt="House interior"
            className="abs-img"
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>

          <h2 className="h2 section-title">
            The Leading Real Estate Rental Marketplace.
          </h2>

          <p className="about-text">
            Over 39,000 people work for us in more than 70 countries all over
            the world. This breadth of global coverage, combined with specialist
            services.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <div className="about-item-icon">
                <IonIcon icon={homeOutline} />
              </div>
              <p className="about-item-text">Smart Home Design</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <IonIcon icon={leafOutline} />
              </div>
              <p className="about-item-text">Beautiful Scene Around</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <IonIcon icon={wineOutline} />
              </div>
              <p className="about-item-text">Exceptional Lifestyle</p>
            </li>

            <li className="about-item">
              <div className="about-item-icon">
                <IonIcon icon={shieldCheckmarkOutline} />
              </div>
              <p className="about-item-text">Complete 24/7 Security</p>
            </li>
          </ul>

          <p className="callout">
            "Enimad minim veniam quis nostrud exercitation ullamco laboris.
            Lorem ipsum dolor sit amet"
          </p>

          <a href="#service" className="btn">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
