import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import service1 from "../assets/images/service-1.png"
import service2 from "../assets/images/service-2.png"
import service3 from "../assets/images/service-3.png"
const Service = () => {
  const services = [
    {
      title: "Buy a home",
      description:
        "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      imageUrl:service1,
      linkText: "Find A Home",
    },
    {
      title: "Rent a home",
      description:
        "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      imageUrl: service2,
      linkText: "Find A Home",
    },
    {
      title: "Sell a home",
      description:
        "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
      imageUrl: service3,
      linkText: "Find A Home",
    },
  ];

  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>
        <h2 className="h2 section-title">Our Main Focus</h2>

        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <div className="card-icon">
                  <img src={service.imageUrl} alt={service.title} />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">{service.title}</a>
                </h3>

                <p className="card-text">{service.description}</p>

                <a href="#" className="card-link">
                  <span>{service.linkText}</span>
                  <IonIcon icon={arrowForwardOutline} />{" "}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
