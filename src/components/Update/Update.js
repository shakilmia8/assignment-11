import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:9000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Update {service.name} </h2>
            <p>{id}</p>
        </div>
    );
};

export default Update;