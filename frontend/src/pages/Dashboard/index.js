import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';

import api from '../../services/api';
import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]); //Defining our useState for spots
    const [ requests, setRequests ] = useState([]);//Defining our useState for requests
    
    const user_id = localStorage.getItem('user');
    const socket = useMemo(() => socketio('http://localhost:3333', {
        query: { user_id } //Getting our user Id from our route
    }), [user_id]); //useMemo serves for we only are reconnecting a user when the user_id changes

    useEffect(() => { //UseEffect that only eexecutes one time, it is, when the front end login successfully
        socket.on('booking_request', data => {
            setRequests([ ...requests, data ]);
        });
    }, [requests, socket]);


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
            <ul className="notiications">
                {requests.map( request => {
                    <li key={request._id}>
                        <p>
                            <strong>{request.user.email}</strong> requests a reservation @<strong>{request.spot.company}</strong> for the date: <strong>{request.date}</strong>
                        </p>
                        <button>Accept</button>
                        <button>Decline</button>
                    </li>
                })}
            </ul>

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