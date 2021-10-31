import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeBackground from '../../images/main-banner.jpg'

import './Banner.css';

const Banner = () => {
    const homeBanner = {
        width: "100%",
        height: "500px",
        backgroundImage: `url(${homeBackground})`
    }
    return (
        <>
        <div style={homeBanner}>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="banner-info">
                            <h5 className="tagline text-center">explore</h5>
                            <h1 className="banner-header text-center">THE BEAUTY</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
        </>
    );
};

export default Banner;