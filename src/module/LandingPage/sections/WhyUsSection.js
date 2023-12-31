import React from "react";
import iconComplete from "../../../assets/WhyUsAssets/icon_complete.svg";
import iconPrice from "../../../assets/WhyUsAssets/icon_price.svg";
import icon24h from "../../../assets/WhyUsAssets/icon_24hrs.svg";
import iconProfessional from "../../../assets/WhyUsAssets/icon_professional.svg"

const whyUsData = [
    {
        icon: iconComplete,
        title: "Mobil Lengkap", 
        desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    }, 
    {
        icon: iconPrice,
        title: "Harga Murah",
        desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
        icon: icon24h,
        title: "Layanan 24 Jam",
        desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
        icon: iconProfessional,
        title: "Sopir Profesional",
        desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },   
];

function WhyUsSection () {
    return (
        <div className="why-us-container"  style={{ margin: '2em', marginTop:"50px"}} >
            <h2 className ="why-us-title" style={{ marginLeft: "15px"}}>WhyUs?</h2>
            <div className="why-question">Mengapa harus pilih Binar Car Rental?</div>
            <div style={{ marginTop: '50px' }} />

            <div cards style={{ display: "flex", gap: "3em", weight: "268px", height: "196px"}}>
                {whyUsData.map(({ icon, title, desc }, idx) => (
                    <div className="card" key={idx} style={{ flex: 1 }}>
                        <img className="icon-why-us" width={"32px"} height={"32px"} src={icon} alt="icon" style={{ alignSelf: "flex-start", marginLeft: "20px", marginTop: "20px" }} />
                        <div class="card-body">
                            <h4 class="card-title">{title} </h4>
                            <p class="card-text">{desc}</p>
                        </div>
                    </div>
    ))}
    </div>
    </div>
    );
}

export default WhyUsSection;