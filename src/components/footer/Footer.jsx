import React from "react";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  callOutline,
  mailOutline,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
  logoYoutube,
} from "ionicons/icons";
import logolight from "../../assets/images/logo-light.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={logolight} alt="Homeverse logo" />
            </a>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            <ul className="contact-list">
              <li>
                <a href="/" className="contact-link">
                  <IonIcon icon={locationOutline} />
                  <address>Pune, Maharashtra, India</address>
                </a>
              </li>
              <li>
                <a href="tel:+0123456789" className="contact-link">
                  <IonIcon icon={callOutline} />
                  <span>+0123-456789</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
                  <IonIcon icon={mailOutline} />
                  <span>contact@agent.com</span>
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <IonIcon icon={logoYoutube} />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  All Products
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Locations Map
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Wish List
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Login
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  My account
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Promotional Offers
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Customer Care</p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Login
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  My account
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Wish List
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="/">Charudatta Warke</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
