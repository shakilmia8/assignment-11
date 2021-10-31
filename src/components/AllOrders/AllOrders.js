import React from 'react';
import './AllOrders.css';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllOrders = (props) => {
    const { name, country, describe, img } = props.service;

    return (
        <div className='all-orders'>
            <Col>
                <Card>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Place Name {name}</Card.Title>
                        <Card.Title>Country: {country}</Card.Title>
                        <Card.Text>
                            {describe.slice(0, 400)}
                        </Card.Text>
                        <Link to={`/manage/update/${props.service._id}`} >
                            <Button variant='primary'>Update</Button>
                        </Link>
                        <Button onClick={() => props.handleDeleteService(props.service._id)} variant='primary'>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrders;