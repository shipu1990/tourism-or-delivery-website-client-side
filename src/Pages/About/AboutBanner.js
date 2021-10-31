import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutBannerImg from '../../images/common-page-banner.jpg';

const AboutBanner = () => {
    const aboutBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${aboutBannerImg})`
    }
    return (
        <div style={aboutBanner}>
            <Container>
                <Row>
                    <Col>
                        <div className="common-banner-info">
                            <h5 className="common-tagline text-center">Trip Travel</h5>
                            <h1 className="common-heading text-center">About us</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutBanner;