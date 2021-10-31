import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bookingBannerImg from '../../images/common-page-banner.jpg';

const BookingBanner = () => {
    const bookingBanner = {
        width: "100%",
        height: "300px",
        backgroundImage: `url(${bookingBannerImg})`
    }
    return (
        <div style={bookingBanner}>
        <Container>
            <Row>
                <Col>
                    <div className="common-banner-info">
                        <h5 className="common-tagline text-center">Trip Travel</h5>
                        <h1 className="common-heading text-center">Booking Page</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default BookingBanner;