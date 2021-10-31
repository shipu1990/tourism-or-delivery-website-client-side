import React, { useState, useEffect } from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    const [destinations, setDestinations] = useState([]);
    //console.log(service);

    useEffect(()=>{
        fetch('http://localhost:5000/destination')
        .then(res => res.json())
        .then(data => setDestinations(data))
    } ,[])
    return (
        <div>
            <Banner></Banner>
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
            <div className="total-achivement">
                <Container>
                    <Row>
                        <Col xs={12} md={4} >
                            <h2>22+ <br/> <span>Professional Tour Guides</span></h2>
                        </Col>
                        <Col xs={12} md={4} >
                            <h2>84k<br/> <span>Tours are Completed</span></h2>
                        </Col>
                        <Col xs={12} md={4} >
                            <h2>88k<br/> <span>Happy Customers</span></h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <Container>
            <Row>
                <Col>
                    <h6 className="inner-page-tag text-center">Trip Travels</h6>
                    <h3 className="inner-page-head text-center">FAQ</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                            <Accordion.Body>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Which payment methods are acceptable?</Accordion.Header>
                            <Accordion.Body>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How to book the new tour for 2 persons?</Accordion.Header>
                            <Accordion.Body>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>All taxes are included in the booking prices?</Accordion.Header>
                            <Accordion.Body>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>I am having trouble while booking?</Accordion.Header>
                            <Accordion.Body>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Is it possible to manage details through dashboard?</Accordion.Header>
                            <Accordion.Body>There are many variations of passages of available but majority have alteration in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.
                            </Accordion.Body>
                        </Accordion.Item>
                   </Accordion>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Home;