import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id='services' className='services'>
            <h1>Our Tourism Place</h1>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    ))}
                </Row>

            }
        </div>
    );
};

export default Services;