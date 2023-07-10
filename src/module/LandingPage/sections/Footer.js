import React from "react";
import FacebookIcon from "../../../assets/FooterAssets/icon_facebook.svg";
import InstagramIcon from "../../../assets/FooterAssets/icon_instagram.svg";
import TwitterIcon from "../../../assets/FooterAssets/icon_twitter.svg";
import MailIcon from "../../../assets/FooterAssets/icon_mail.svg";
import TwitchIcon from "../../../assets/FooterAssets/icon_twitch.svg";
import Logo from "../../../assets/Rectangle 74.png";


const Footer = () => {
  return (
    <div class="containerFooter">
      <div class="row">
        <div class="col">
          
          <h6 style={{ marginLeft: "90px"}}>
            Jalan Suroyo No. 161 Mayangan Kota 
            Probolonggo 67200 <br></br><br></br>
            binarcarrental@gmail.com <br></br> <br></br>
            081-233-224-808
          </h6>
        </div>
        <div class="col" style={{ marginLeft: '200px'}}>
          <p>Our Service </p>
          <p>Why Us</p>
          <p>Testimonial </p>
          <p>FAQ </p>
          </div>
        <div class="col" style={{ marginLeft: '0px' }}> 
        <p>Connect With Us</p> 
        <img src={FacebookIcon } style={{ margin: '5px' }} /> 
        <img src={InstagramIcon} style={{ margin: '5px' }} /> 
        <img src={TwitterIcon} style={{ margin: '5px' }} /> 
        <img src={MailIcon} style={{ margin: '5px' }} /> 
        <img src={TwitchIcon} style={{ margin: '5px' }} /> 
        
           </div>
        <div class= "col"> <p>Copyright Binar 2022</p>  <img src={Logo} style={{ width: "100px", height: "34px" }}/> </div>
      </div>
    </div>
  )
}


export default Footer;