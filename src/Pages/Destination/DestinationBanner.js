import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import destinationBannerImg from '../../images/common-page-banner.jpg';

const DestinationBanner = () => {
    const destinationBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${destinationBannerImg})`
    }
    return (
        <div style={destinationBanner}>
        <Container>
            <Row>
                <Col>
                    <div className="common-banner-info">
                        <h5 className="common-tagline text-center">Trip Travel</h5>
                        <h1 className="common-heading text-center">Destination</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default DestinationBanner;