import React from 'react';
import './Manage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrders from '../AllOrders/AllOrders';

const Manage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // Delete a service
    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:9000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }

    }
    return (
        <div className='manage'>
            <h1>Manage All Orders</h1>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        services.map(service => <AllOrders key={service._id} service={service} handleDeleteService={handleDeleteService}></AllOrders>)
                    ))}
                </Row>
            }
        </div>
    );
};

export default Manage;