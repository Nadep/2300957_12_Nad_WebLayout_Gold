import React from "react";
import MenImage from "../../../assets/TestimoniAssets/img_men.svg";
import WomenImage from "../../../assets/TestimoniAssets/img_women.svg";
import { Container, Col, Row } from "reactstrap";

const TestimoniSection = () => {
    return (
        <Container >
            <h2 class="testimoni-section-text-title"> Testimonial </h2>
            <p class="testimoni-section-text-description"> Berbagai review positif dari para pelanggan kami </p> 
            <Row className="testimoni-container">

                <Col className= "Testimoni-contect-section">
            <Col className="Testimoni-men-image">
            <img src={MenImage} width="80px" height={"80px"} alt="MenImage" flex-shrink={0} />
            <br></br>
            </Col>
            <p class ="testimoni-section-text-testi"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
            <p class ="testimoni-section-text-name"> John Dee 32, Bromo </p>
            </Col>

            <Col className="Testimoni-content-section">
            <Col className="Testimoni-women-image">
            <img src={WomenImage} width="80px" height={"80px"} alt="WomenImage" flex-shrink={0} />
            <br></br>
            </Col>
            <p class ="testimoni-section-text-testi"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
            <p class ="testimoni-section-text-name"> John Dee 32, Bromo </p>
            </Col>

            <Col className="Testimoni-content-section">
            <Col className="Testimoni-women-image">
            <img src={WomenImage} width="80px" height={"80px"} alt="WomenImage" flex-shrink={0} />
            </Col>
            <br></br>
            <p class ="testimoni-section-text-testi"> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
            <p class ="testimoni-section-text-name"> John Dee 32, Bromo </p>
            </Col>


            </Row>
            </Container>

);
    };

export default TestimoniSection;

    {/* // <Container fluid style={{ display: "flex", alignItems: "center"}}>
    // <div style={{ flex: 1, marginLeft:200 }}>
    //     <img src={WomenImage} width="80px" height={"80px"} />
    // </div>
    // <div style={{ flex: 1}}>
    //     <h2> Testimonial </h2>
    //     <p style={{ margin: "2em 0"}}>
    //     Berbagai review positif dari para pelanggan kami
    //     </p>
    //     <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod” </p>
    //     <p> John Dee 32, Bromo </p>
    //     </div>
    //     </Container> */}

// {/* <div id="carouselExampleIndicators" class="carousel slide">
// <div class="carousel-indicators">
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//   <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
// </div>
//   <div class="carousel-item">
//     <img src="MenImage" class="MenImage" alt="MenImage"> </img>
//   </div>
//   <div class="carousel-item">
//     <img src="WomenImage" class="WomenImage" alt="WomenImage"> </img>
// </div>
// <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Previous</span>
// </button>
// <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//   <span class="visually-hidden">Next</span>
// </button>
// </div> */}