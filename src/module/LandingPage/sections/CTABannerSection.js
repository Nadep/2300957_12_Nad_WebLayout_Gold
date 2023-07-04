import React from "react";
import { Button } from "reactstrap";


export default function CTABannerSection() {
    return (
        <div 
        className="container banner"
            style={{
                backgroundColor: "biru",
                width: "1168",
                height: "326px",
                top: "2078px",
                left: "136px",
                borderRadius: "13px",
            }}>

            <div style={{ margin: "100px" }}>
                <div className="text-center">
                    <h2 style={{ color: "black", fontWeight: "bold" }}> Sewa Mobil di (Lokasimu) Sekarang </h2>
                    <br />

                    <p style={{ color: "black", fontSize: "15px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p><br />
                    <Button color="success" style={{ margin: "0 auto " }}>
                        Mulai Sewa Mobil
                    </Button>
                </div>
            </div>
        </div>

    );
}







