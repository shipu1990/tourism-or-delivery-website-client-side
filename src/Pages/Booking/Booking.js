import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import BookingBanner from './BookingBanner';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { destinationId } = useParams();
    const {user} = useAuth();
    const [destination, setDestinationId] = useState({})
    const userEmail = user.email;
    const [booking, setBooking] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/destination/${destinationId}`)
        .then(res => res.json())
        .then(data => setDestinationId(data))
    } ,[])

    const handleBooking = id =>{

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Booking processed Successfully');
            }
        })
    }
    return (
        <div>
            <BookingBanner></BookingBanner>
            <Container>
            <Row>
                <Col>
                    <h6 className="inner-page-tag text-center"></h6>
                   </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}> Total Bookig:{booking} {userEmail}</Col>
                <Col xs={12} md={4}>
                    <div className="service-box">
                        <Image src={destination.img} fluid />
                        <div className="service-info">
                            <h2 className="service-head">{destination.name}</h2>
                            <p className="service-para">{destination.price} / Per Person</p>
                            <p className="service-para">{destination.description}</p>
                            <Button className="read-more-btn" onClick={()=> handleBooking(`${destination._id}`)}>Book Now</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Booking;
