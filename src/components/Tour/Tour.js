import React from 'react';
import './Tour.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

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
                    <Card>
                        <Card.Img className='img' variant="top" src={graphicRiver} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='img' variant="top" src={audioJungle} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='img' variant="top" src={activeDen} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img className='img' variant="top" src={codeCanyon} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Tour;