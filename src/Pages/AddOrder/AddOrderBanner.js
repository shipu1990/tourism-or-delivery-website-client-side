import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import orderBannerImg from '../../images/common-page-banner.jpg';
const AddOrderBanner = () => {
    const allOrderBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${orderBannerImg})`
    }
    return (
        <div style={allOrderBanner}>
        <Container>
            <Row>
                <Col>
                    <div className="common-banner-info">
                        <h5 className="common-tagline text-center">Trip Travel</h5>
                        <h1 className="common-heading text-center">Add Order</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default AddOrderBanner;