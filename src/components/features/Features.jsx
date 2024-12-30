import React from "react";
import { IonIcon } from "@ionic/react";
import {
  carSportOutline,
  waterOutline,
  shieldCheckmarkOutline,
  fitnessOutline,
  libraryOutline,
  bedOutline,
  homeOutline,
  footballOutline,
  arrowForwardOutline,
} from "ionicons/icons"; 

const Features = () => {
  const amenities = [
    { icon: carSportOutline, title: "Parking Space" },
    { icon: waterOutline, title: "Swimming Pool" },
    { icon: shieldCheckmarkOutline, title: "Private Security" },
    { icon: fitnessOutline, title: "Medical Center" },
    { icon: libraryOutline, title: "Library Area" },
    { icon: bedOutline, title: "King Size Beds" },
    { icon: homeOutline, title: "Smart Homes" },
    { icon: footballOutline, title: "Kid’s Playland" },
  ];

  return (
    <section className="features">
      <div className="container">
        <p className="section-subtitle">Our Amenities</p>
        <h2 className="h2 section-title">Building Amenities</h2>
        <ul className="features-list">
          {amenities.map((amenity, index) => (
            <li key={index}>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <IonIcon icon={amenity.icon} />
                </div>
                <h3 className="card-title">{amenity.title}</h3>
                <div className="card-btn">
                  <IonIcon icon={arrowForwardOutline} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
