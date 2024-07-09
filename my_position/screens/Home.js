import React, { useEffect, useState } from 'react'
import * as GeoLocation from 'expo-location'
import { Button, View, StyleSheet, Text, Share } from 'react-native'


export default function Home() {
    const [location, setlocation] = useState(null);
    const [errorMSG, setErrorMMSG] = useState(null);
    let latitude = null;
    let longitude = null;
    let altitude = null;

    async function getUserLocation() {
        const { status } = await GeoLocation.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert("Autorise la localisation pour le bon fonctionnement de l'application")
            setErrorMMSG("La permission d'accès a été refusé")
        }
        const location2 = await GeoLocation.getCurrentPositionAsync({});
        setlocation(location2)
    }

    useEffect(() => {
        getUserLocation()
    }, [])

    async function sharePosition() {
        try {
            await Share.share({
                message: `Au secour! Je suis coincé à la position indiqué par le lien ci-dessous. Cliquez sur le lien pour afficher ma position`+
                '\n latitude : ' +latitude+
                '\n longitude : ' +longitude+
                '\n altitude : '+altitude+
                '\n https://www.google.com/maps/search/?api=1&query='+latitude+'%2C'+longitude
            })
        } catch (e) {
            alert(e.message);
        }
    };

    let text = 'Cliquer sur le button pour obtenir ma position';
    if (errorMSG) {
        text = errorMSG
    }
    else if (location) {
        latitude = location.coords.latitude;
        longitude = location.coords.longitude;
        altitude = location.coords.altitude
        text = 'latitude : ' +latitude+
               '\n longitude : ' +longitude+
               '\n altitude : '+altitude;
    }

    return (
        <View style={styles.container} >
            <Button title='Ma position' onPress={getUserLocation} />
            <Text>{ text }</Text>
            <Button title='Partager' onPress={sharePosition} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    },

    text: {
        marginTop: 100,
        marginBottom: 100,
        fontSize: 20
    }
})