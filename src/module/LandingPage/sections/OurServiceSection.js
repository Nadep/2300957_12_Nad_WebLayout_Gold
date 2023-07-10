import React from "react";
import ServiceImage from '../../../assets/img_service.png';
import checkIcon from "../../../assets/check.svg";
import { Container } from "reactstrap";

const OurServiceSection = () => {
    return (
  
        <Container className="ourService-Container" style={{ marginTop: "100px"}}>
          <div className="ourServiceImage" >
          <img src={ServiceImage} />
          </div>
          <div className="ourServiceContent">
          <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
          <p >
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          <div className="services-list">
            {servicesList.map((val, idx) => (
              <div key={idx}>
                <img className="checklist-Icon"  style={{ margin: '5px' }} src={checkIcon} />
                <p style={{ display: "inline" }}>{val}</p>
              </div>
            ))}
          </div>
        </div>
        </Container>
    );
  };

  const servicesList = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];

  export default OurServiceSection;