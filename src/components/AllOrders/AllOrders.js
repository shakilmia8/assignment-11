import React from 'react';
import './AllOrders.css';
import { Col, Card, Button } from 'react-bootstrap';

const AllOrders = ({ name }) => {
    return (
        <div className='all-orders'>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>{name}</h2>
                        <Button variant='primary'>Update</Button>
                        <Button variant='primary'>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrders;