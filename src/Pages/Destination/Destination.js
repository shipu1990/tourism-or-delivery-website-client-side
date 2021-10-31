import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DestinationBanner from './DestinationBanner';
import './Destination.css';

const Destination = () => {
    const [destinations, setDestinations] = useState([]);
    //console.log(service);

    useEffect(()=>{
        fetch('http://localhost:5000/destination')
        .then(res => res.json())
        .then(data => setDestinations(data))
    } ,[])
    return (
        <div>
            <DestinationBanner></DestinationBanner>

            <Container>
            <Row>
                <Col>
                    <h6 className="inner-page-tag text-center">Trip Travels</h6>
                    <h3 className="inner-page-head text-center">Trusted Award Winning Tour Agency</h3>
                    <p className="inner-para text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
            <Row>
                    {
                    destinations.map(destination =><Col xs={12} md={4} key={destination._id}>
                      <div className="service-box">
                        <Image src={destination.img} fluid />
                        <div className="service-info">
                            <h2 className="service-head">{destination.name}</h2>
                            <p className="service-para">{destination.price} / Per Person</p>
                            <Link className="read-more-btn" to ={`booking/${destination._id}`}>Read More</Link>
                        </div>
                    </div>
                    </Col>) 
                    }
            </Row>
        </Container>
        </div>
    );
};

export default Destination;