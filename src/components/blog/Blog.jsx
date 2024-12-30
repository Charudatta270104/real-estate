import React from "react";
import { IonIcon } from "@ionic/react";
import { person, pricetags, calendar } from "ionicons/icons";
import blog1 from "../../assets/images/blog-1.png"
import blog2 from "../../assets/images/blog-2.jpg"
import blog3 from "../../assets/images/blog-3.jpg"
const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: blog1,
      altText: "The Most Inspiring Interior Design Of 2024",
      title: "The Most Inspiring Interior Design Of 2024",
      date: "Jan 13, 2024",
      category: "Interior",
      author: "Admin",
    },
    {
      imgSrc: blog2,
      altText: "Recent Commercial Real Estate Transactions",
      title: "Recent Commercial Real Estate Transactions",
      date: "May 9, 2024",
      category: "Estate",
      author: "Admin",
    },
    {
      imgSrc: blog3,
      altText: "Renovating a Living Room? Experts Share Their Secrets",
      title: "Renovating a Living Room? Experts Share Their Secrets",
      date: "Dec 7, 2024",
      category: "Room",
      author: "Admin",
    },
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>
        <h2 className="h2 section-title">Latest News Feeds</h2>
        <ul className="blog-list has-scrollbar">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner">
                  <img src={post.imgSrc} alt={post.altText} className="w-100" />
                </figure>

                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="" className="card-meta-link">
                          <IonIcon icon={person} />
                          <span>by: {post.author}</span>
                        </a>
                      </li>
                      <li>
                        <a href="" className="card-meta-link">
                          <IonIcon icon={pricetags} />
                          <span>{post.category}</span>
                        </a>
                      </li>
                    </ul>
                    <h3 className="h3 blog-title">
                      <a href="">{post.title}</a>
                    </h3>
                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <IonIcon icon={calendar} />
                      <time datetime="2022-04-27">{post.date}</time>
                    </div>
                    <a href="" className="read-more-btn">
                      Read More
                    </a>
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

export default BlogSection;
