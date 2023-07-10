import React from "react";
import menImage from "../../../assets/TestimoniAssets/img_men.svg";
import womenImage from "../../../assets/TestimoniAssets/img_women.svg";
import Rate from "../../../assets/TestimoniAssets/Rate.svg";

export default function Testimoni() {
  const testiData = [
    {
      icon: Rate,
      profile: womenImage,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
      desc: "John Dee 32, Bromo",
    },
    {
      icon: Rate,
      profile: menImage,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
      desc: "John Dee 32, Bromo",
    },
    
    {
      icon: Rate,
      profile: womenImage,
      title:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
      desc: "John Dee 32, Bromo",
    },
  ];

  return (
    <div>
      <h2 className="testi-heading" style={{ marginTop:"100px"}}>Testimonial</h2>
      <div className="testi-desc">
        Berbagai review positif dari para pelanggan kami
      </div>

      <div className="testi-container">
        {testiData.map(({ icon: Icon, profile, title, desc }, idx) => (
          <div
            className="card"
            key={idx}
            style={{ backgroundColor: "#F1F3FF" }}
          >
            <div className="card-content">
              <img className="profile-image" src={profile} alt="profile" />
              <div className="text-content">
                <img className="icon" src={Icon} alt="icon" />
                <p className="card-title">{title}</p>
                <p className="card-text">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}