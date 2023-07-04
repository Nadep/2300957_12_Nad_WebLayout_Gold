import React from "react";
import FacebookIcon from "../../../assets/FooterAssets/icon_facebook.svg";
import InstagramIcon from "../../../assets/FooterAssets/icon_instagram.svg";
import TwitterIcon from "../../../assets/FooterAssets/icon_twitter.svg";
import MailIcon from "../../../assets/FooterAssets/icon_mail.svg";
import TwitchIcon from "../../../assets/FooterAssets/icon_twitch.svg";


const Footer = () => {
  return (
    <div class="containerFooter">
      <div class="row">
        <div class="col">
          <h6>
            Jalan Suroyo No. 161 Mayangan Kota <br></br>
            Probolonggo 67200 <br></br><br></br>
            binarcarrental@gmail.com <br></br> <br></br>
            081-233-224-808
          </h6>
        </div>
        <div class="col">
          Our Service <br></br>
          Why Us <br></br>
          Testimonial <br></br>
          FAQ </div>
        <div class="col"> Connect With Us <br></br> <br></br>
        <img src={FacebookIcon} /> 
        <img src={InstagramIcon} /> 
        <img src={TwitterIcon} /> 
        <img src={MailIcon} /> 
        <img src={TwitchIcon} /> 
        
           </div>
        <div class="col">Copyright Binar 2022</div>
      </div>
    </div>
  )
}


export default Footer;