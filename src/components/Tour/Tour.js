import React from 'react';
import './Tour.css';
import { Row, Col, Card } from 'react-bootstrap';

const Tour = () => {
    const graphicRiver = 'https://addotech.com/managedservices/wp-content/uploads/2013/12/graphicriver.png';
    const audioJungle = 'https://addotech.com/managedservices/wp-content/uploads/2013/12/audiojungle.png';
    const activeDen = 'https://addotech.com/managedservices/wp-content/uploads/2013/12/activeden.png';
    const codeCanyon = 'https://addotech.com/managedservices/wp-content/uploads/2013/12/codecanyon.png';
    return (
        <div className='tour'>
            <h1>TOUR OPERATORS</h1>
            <p>Tour operator is an organization, firm, or company who buys individual travel components</p>
            <Row xs={1} sm={1} md={2} lg={4} className="g-4">
                <Col>
                    <Card.Img className='image' variant="top" src={graphicRiver} />
                </Col>
                <Col>
                    <Card.Img className='image' variant="top" src={audioJungle} />
                </Col>
                <Col>
                    <Card.Img className='image' variant="top" src={activeDen} />
                </Col>
                <Col>
                    <Card.Img className='image' variant="top" src={codeCanyon} />
                </Col>
            </Row>
        </div>
    );
};

export default Tour;