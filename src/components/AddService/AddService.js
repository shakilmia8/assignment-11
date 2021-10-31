import React from 'react';
import { useRef } from 'react';
import './AddService.css';

const AddService = () => {
    const nameRef = useRef();
    const countryRef = useRef();
    const imgRef = useRef();
    const describeRef = useRef();

    const handleAddService = e => {
        const name = nameRef.current.value;
        const country = countryRef.current.value;
        const img = imgRef.current.value;
        const describe = describeRef.current.value;

        const newService = { name, country, img, describe };

        fetch('http://localhost:9000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the service')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className='add-service'>
            <h2>Please Add A Service</h2>
            <form onSubmit={handleAddService}>
                <input placeholder='Enter the place name' type="text" ref={nameRef} /><br />
                <input placeholder='Enter the place country' type="text" ref={countryRef} /><br />
                <input placeholder='Enter the place imgUrl' type="text" ref={imgRef} /><br />
                <textarea placeholder='Enter the place describe' name="" id="" cols="30" rows="10" ref={describeRef}></textarea><br />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;