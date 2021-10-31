import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import loginBanner from '../../images/common-page-banner.jpg';

const LoginBanner = () => {
    const aboutBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${loginBanner})`
    }
    return (
        <div style={aboutBanner}>
            <Container>
                <Row>
                    <Col>
                        <div className="common-banner-info">
                            <h5 className="common-tagline text-center">Trip Travel</h5>
                            <h1 className="common-heading text-center">Login</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginBanner;