import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../images/HTUevents.png')} style={styles.logoImage}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    logoImage: {
        resizeMode: "contain",
        width: "70%",
        height: "70%",
    },
});

export default SplashScreen;
