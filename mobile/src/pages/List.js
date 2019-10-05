import React, { useState, useEffect } from 'react';
import { Alert, AsyncStorage, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

import socketio from 'socket.io-client';

export default function List() {
    const [ techs, setTechs ] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.110:3333', {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Your reserve at ${booking.spot.company} in date ${booking.date} was ${booking.approved ? 'APPROVED' : 'DECLINED'}`)
            });
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storedTechs => {
            const techsArray = storedTechs.split(',').map(tech => tech.trim())
            
            setTechs(techsArray);
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <ScrollView>
                {techs.map( tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})