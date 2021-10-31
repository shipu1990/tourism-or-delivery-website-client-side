import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import MyOrderBanner from './MyOrderBanner';

const MyOrder = () => {
    return (
        <div>
            <MyOrderBanner></MyOrderBanner>
            <Container>
            <Row>
                <Col>
                    <h6 className="inner-page-tag text-center">Trip Travels</h6>
                    <h3 className="inner-page-head text-center">My Order</h3>
                </Col>
            </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Destination Name</th>
                                <th>Destination Description</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;