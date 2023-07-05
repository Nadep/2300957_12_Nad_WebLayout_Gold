import React from "react";
import ServiceImage from '../../../assets/img_service.png';
import checkIcon from "../../../assets/check.svg";
import { Container } from "reactstrap";

const OurServiceSection = () => {
    return (
      // <div
      //   style={{
      //     marginTop: "6em",
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //   }}
      // >
      //   <div
      //     style={{
      //       marginRight: "-50px",
      //       flex: 1,
      //       width: "400px",
      //       height: "auto",
      //       textAlign: "center",
      //     }}
      //   >
        <Container fluid style={{ display: "flex", alignItems: "center"}}>
          <div style={{ flex: 1, marginLeft:200  }}>
          <img src={ServiceImage} width="400px" height={"auto"} />
          </div>
          <div style={{ flex: 1 }}>
          <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
          <p style={{margin:"2em 0"}}>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          <div>
            {servicesList.map((val, idx) => (
              <div key={idx}>
                <img style={{ display : "inline ", margin: '5px' }} src={checkIcon} />
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