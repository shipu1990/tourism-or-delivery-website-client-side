import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import ContactBanner from './ContactBanner';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Container>
                <Row>
                <Col>
                   
                </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} >
                        <h6 className="inner-page-tag text-left">Would like to talk?</h6>
                        <h3 className="inner-page-head text-left">CONTACT DETAILS</h3>
                        <p className="contact-para">If you have a story to share or a question that has not been answered on our website, 
                            please get in touch with us via contact details listed below or fill in the form on the right.</p>
                        <p className="contact-para"><span>Address:</span> 777 Franklin St, San Francisco</p>
                        <p className="contact-para"><span>Phone:</span> +1 420-240-6000</p>
                        <p className="contact-para"><span>Email:</span> contact@triptravels.com</p>
                        <p className="contact-para"><span>Skype:</span> triptravels.tours</p>
                    </Col>
                    <Col xs={12} md={6} >
                        <h6 className="inner-page-tag text-left">Have a question?</h6>
                        <h3 className="inner-page-head text-left">GET IN TOUCH</h3>

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" className="mb-3"  type="submit">
                                        Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;