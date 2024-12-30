import React from "react";
import { IonIcon } from "@ionic/react"; // Import IonIcon
import {
  locationOutline,
  cameraOutline,
  filmOutline,
  bedOutline,
  manOutline,
  squareOutline,
  resizeOutline,
  heartOutline,
  addCircleOutline,
} from "ionicons/icons"; 
import property1 from "../../assets/images/property-1.jpg"
import property2 from "../../assets/images/property-2.jpg"
import property3 from "../../assets/images/property-3.jpg"
import author from "../../assets/images/author.png"
const Property = () => {
  const properties = [
    {
      id: 1,
      image: property1,
      title: "New Apartment Nice View",
      price: "₹28,900/Month",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      location: "Bird Valley Gardens, Wakad Pune",
      badge: "For Rent",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      author: "Admin",
      authorTitle: "Estate Agents",
      authorImage: author,
    },
    {
      id: 2,
      image: property2,
      title: "Modern Apartments",
      price: "₹25,900/Month",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      location: "Katraj",
      badge: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      author: "Admin",
      authorTitle: "Estate Agents",
      authorImage: author,
    },
    {
      id: 3,
      image: property3,
      title: "New Apartment Nice View",
      price: "₹34,900/Month",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      location: "Pune Station",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      author: "Admin",
      authorTitle: "Estate Agents",
      authorImage: author,
    },
    {
      id: 4,
      image: property1,
      title: "Modern Apartments",
      price: "₹12,900/Month",
      description:
        "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      location: "Talegaon",
      badge: "For Sale",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3450,
      author: "Admin",
      authorTitle: "Estate Agents",
      authorImage: author,
    },
  ];

  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>
        <h2 className="h2 section-title">Featured Listings</h2>
        <ul className="property-list has-scrollbar">
          {properties.map((property) => (
            <li key={property.id}>
              <div className="property-card">
                <figure className="card-banner">
                  <a href="#">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-100"
                    />
                  </a>
                  <div
                    className={`card-badge ${
                      property.badge === "For Rent" ? "green" : "orange"
                    }`}
                  >
                    {property.badge}
                  </div>
                  <div className="banner-actions">
                    <button className="banner-actions-btn">
                      <IonIcon icon={locationOutline} />
                      <address>{property.location}</address>
                    </button>
                    <button className="banner-actions-btn">
                      <IonIcon icon={cameraOutline} />
                      <span>4</span>
                    </button>
                    <button className="banner-actions-btn">
                      <IonIcon icon={filmOutline} />
                      <span>2</span>
                    </button>
                  </div>
                </figure>

                <div className="card-content">
                  <div className="card-price">
                    <strong>{property.price}</strong>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">{property.title}</a>
                  </h3>
                  <p className="card-text">{property.description}</p>
                  <ul className="card-list">
                    <li className="card-item">
                      <strong>{property.bedrooms}</strong>
                      <IonIcon icon={bedOutline} />
                      <span>Bedrooms</span>
                    </li>
                    <li className="card-item">
                      <strong>{property.bathrooms}</strong>
                      <IonIcon icon={manOutline} />
                      <span>Bathrooms</span>
                    </li>
                    <li className="card-item">
                      <strong>{property.squareFeet}</strong>
                      <IonIcon icon={squareOutline} />
                      <span>Square Ft</span>
                    </li>
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="card-author">
                    <figure className="author-avatar">
                      <img
                        src={property.authorImage}
                        alt={property.author}
                        className="w-100"
                      />
                    </figure>
                    <div>
                      <p className="author-name">
                        <a href="#">{property.author}</a>
                      </p>
                      <p className="author-title">{property.authorTitle}</p>
                    </div>
                  </div>
                  <div className="card-footer-actions">
                    <button className="card-footer-actions-btn">
                      <IonIcon icon={resizeOutline} />
                    </button>
                    <button className="card-footer-actions-btn">
                      <IonIcon icon={heartOutline} />
                    </button>
                    <button className="card-footer-actions-btn">
                      <IonIcon icon={addCircleOutline} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Property;
