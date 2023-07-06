import MyForm from '../../../components/form';
import Footer from '../../LandingPage/sections/Footer';
import { Fragment, useState } from "react";
import { Button, Col, Row, Card, CardBody, CardTitle, CardText } from "reactstrap";


export default function SearchSection() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmited] = useState(false);
    const formatToIDR = (idr) => {
        const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return `${'Rp '}${parsed}`;
    };

    console.log(data)
    return (

        <div>
            <MyForm setData={setData} setIsLoading={setIsLoading} setIsSubmited={setIsSubmited} />
            <div style={{ marginTop: '50px' }} />
            <section className="display-car-section" style={{ width: "900px" }}>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <Row style={{ gap: "25%" }}>
                        {data.map(car => {
                            return (
                                <Fragment key={car.id}>
                                    <Col md={2}>
                                        <Card
                                            style={{
                                                marginLeft: '125%', marginRight: '100px', width: "333px", height: "478px", marginTop: "25%"

                                            }}
                                        >
                                            <img
                                                alt={car.name}
                                                src={car.image}
                                            />
                                            <CardBody>
                                                <CardTitle tag="h5">
                                                    {car.name}
                                                </CardTitle>
                                                <CardText>
                                                    {formatToIDR(car.price)} / hari
                                                </CardText>
                                                <CardText >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </CardText>
                                                <Button
                                                    color="success"
                                                    style={{ width: "100%" }}
                                                    onClick={() => console.log(car.id)}
                                                >
                                                    Pilih Mobil
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Fragment>
                            )
                        })}
                    </Row>
                )}
            </section>

            <div style={{ marginTop: '50px' }} />
            <Footer />
        </div>
    )
}