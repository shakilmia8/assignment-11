import React from 'react';
import './Manage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrders from '../AllOrders/AllOrders';

const Manage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='manage'>
            <h1>Manage All Orders</h1>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        services.map(service => <AllOrders key={service.id} name={service.name}></AllOrders>)
                    ))}
                </Row>
            }
        </div>
    );
};

export default Manage;