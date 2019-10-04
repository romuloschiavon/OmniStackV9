import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';

import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]); //Defining our useState for spots
    useEffect(() => { //UseEffect that only eexecutes one time, it is, when the front end login successfully
        const user_id = localStorage.getItem('user');
        const socket = socketio('http://localhost:3333', {
            query: { user_id } //Getting our user Id from our route
        });
    }, []);


    useEffect(() => { //useEffect for loading spots. Using our user_id!
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data);
        }

        loadSpots()
    }, []);
    
    return (
        //Our return is indeed a HTML, with a unique key for each spot
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}></header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `${spot.price} USD/day` : 'FREE'}</span>
                    </li>
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Register a new Spot!</button>
            </Link>
        </>
    )
}