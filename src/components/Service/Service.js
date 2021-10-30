import React from 'react';
import './Service.css';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, describe, img, country } = props.service;
    return (
        <div className='service'>
            <Col>
                <Card>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Place Name {name}</Card.Title>
                        <Card.Title>Country: {country}</Card.Title>
                        <Card.Text>
                            {describe.slice(0, 200)}
                        </Card.Text>
                        <Link to={`/serviceDetails/${id}`}>
                            <Button variant='primary'>Place Order</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;