import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {

    const { id, name, img, description, price } = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);

    }


    return (
        <div className='service p-1'>
            <img className='w-100' src={img} alt="" />
            <h2>This is Service: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;