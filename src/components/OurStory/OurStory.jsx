import React from "react";
import "./OurStory.css";
import logo from "../../assets/logo_big.png";
import shop from "../../assets/shop.png";
import money from "../../assets/money.png";
import bag from "../../assets/bag.png";
import sale from "../../assets/sale.png";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

const OurStory = () => {
  const stats = [
    { value: "10.5k", label: "Select online for sale", image: shop },
    { value: "3.3k", label: "Select merchandise in line", image: sale },
    { value: "45.5k", label: "Conceive mobile hire at site", image: bag },
    { value: "25k", label: "Find people with their date", image: money },
  ];

  const team = [
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      social: "@ In",
      image: p1,
    },
    {
      name: "Emma Watson",
      position: "Manager/Builder",
      social: "@ In",
      image: p2,
    },
    {
      name: "Will Smith",
      position: "President/owner",
      social: "@ In",
      image: p3,
    },
  ];

  return (
    <div className="our-story-container ">
      <div className="ourStory d-flex justify-content-between align-items-center">
        <div>
          <div className="story-header">
            <h1>Our Story</h1>
          </div>
          <div className="story-content">
            <p>
              In December 2025, Conceita & Smith McCampaign and the Managing
              member of the company were named Stacycliffe & Raphael Taylor. We
              signed a business consulting report on Conceita's solution. For a
              detailed period, we have made our own data set around a millennial
              customer across the region.
            </p>
            <p>
              Our business owner was looking forward to the offer, granting it
              to another executive officer in development and is struggling
              tomorrow from retirement.
            </p>
          </div>
        </div>
        <img
          className="img-fluid"
          style={{ width: "400px", height: "500px" }}
          src={logo}
        ></img>
      </div>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <img src={stat.image} className="img-fluid" />
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          {team.map((member, index) => (
            <div key={index} className="team-member">
              <img className="img-fluid" src={member.image} />
              <h3>{member.name}</h3>
              <p className="position">{member.position}</p>
              <p className="social">{member.social}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
