import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.svg';
import './styles.css';

export default function New({history}) {
    const [ thumbnail, setThumb ] = useState(null);

    const [ company, setComp ] = useState('');
    const [ techs, setTech ] = useState('');
    const [ price, setPrice ] = useState('');

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null
        }, [thumbnail]
    );
    
    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);
        
        await api.post('/spots', data, {
            headers: { user_id }
        });

        history.push('/dashboard');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail" style={{ backgroundImage: `url(${preview})`}} className={thumbnail ? "has-thumbnail" : ''}>
                <input type="file" onChange={event => setThumb(event.target.files[0])}/>
                <img src={camera} alt="Select img"/>
            </label>
            
            <label htmlFor="company">Enterprise *</label>
            <input
                id="company"
                placeholder="Your incredible enterprise"
                value={company}
                onChange={ event => setComp(event.target.value)}
            />
            
            <label htmlFor="techs">Tecnologies * <span>separated by commas</span></label>
            <input
                id="techs"
                placeholder="Technologies your enterprise uses"
                value={techs}
                onChange={ event => setTech(event.target.value)}
            />
            
            <label htmlFor="techs">Price per day * <span>Leave blank for FREE</span></label>
            <input
                id="price"
                placeholder="Price of use per day"
                value={price}
                onChange={ event => setPrice(event.target.value)}
            />

            <button className="btn">Register your Spot</button>
        </form>)
};