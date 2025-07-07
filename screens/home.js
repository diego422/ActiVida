import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <View style={styles.header}>
                    <View style={styles.userButtom}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </View>
                    <Text style={styles.welcomeMsg}>Hola, Tiffany y Diego!</Text>
                </View>
                <View style={styles.challeges}>
                    <Text style={styles.title}>Retos de hoy</Text>
                    <View style={styles.cardsContainer}>
                        <TouchableOpacity style={styles.challegeCards}></TouchableOpacity>
                        <TouchableOpacity style={styles.challegeCards}></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.plans}>
                    <Text style={styles.title}>Tu Plan personalizado</Text>
                </View>
                <View style={styles.activity}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    mainBox: {
        width: '85%',
        marginTop: 150,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#B9B9B9'
    },
    userButtom: {
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userImage: {
        width: 50,
        height: 50,
    },
    welcomeMsg: {
        color: '#4A4A4A',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    challeges: {
        width: '100%',
        height: 200,
        backgroundColor: '#B9B9B9',
    },
    plans: {},
    activity: {},
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5,
        marginTop: 10,
    },
    cardsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    challegeCards: {
        width: 120,
        height: 100,
        marginTop: 25,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 8,
    }
});
