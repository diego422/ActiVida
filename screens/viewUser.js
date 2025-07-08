import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function viewUser() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.userButtom}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <Text style={styles.userName}>Diego Herrera</Text>
                    <Image source={require('../assets/bell.png')} style={styles.bellImage} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.editButtom}>
                        <Text style={styles.editButtomText}>Editar información</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainInfoContainer}>
                    <View style={styles.infoContainerLeft}>
                        <Text style={styles.infoText}>Usuario</Text>
                        <Text style={styles.infoText}>Edad</Text>
                        <Text style={styles.infoText}>Género</Text>
                        <Text style={styles.infoText}>Nivel</Text>
                    </View>
                    <View style={styles.infoContainerRight}>
                        <Text style={styles.infoText}>Diego H.L</Text>
                        <Text style={styles.infoText}>25</Text>
                        <Text style={styles.infoText}>Masculino</Text>
                        <Text style={styles.infoText}>Principiante</Text>
                    </View>
                </View>
                <View style={styles.stats}>
                    <TouchableOpacity 
                    style={styles.statButtom}
                    onPress={() => navigation.navigate('awards')}>
                        <View style={styles.statButtomLeft}>
                            <Text style={styles.statCardText}>Retos completados</Text>
                        </View>
                        <View style={styles.statButtomRight}>
                            <Text style={[styles.statCardText, { fontWeight: 'bold' }]}>10</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.statButtom}>
                        <View style={styles.statButtomLeft}>
                            <Text style={styles.statCardText}>Recompensas obtenidas</Text>
                        </View>
                        <View style={styles.statButtomRight}>
                            <Text style={[styles.statCardText, { fontWeight: 'bold' }]}>5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.statButtom}>
                        <View style={styles.statButtomLeft}>
                            <Text style={styles.statCardText}>Puntos obtenidos</Text>
                        </View>
                        <View style={styles.statButtomRight}>
                            <Text style={[styles.statCardText, { fontWeight: 'bold' }]}>100</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <View style={styles.logOutButtom}>
                        <Text style={styles.logOutText}>Cerrar sesión</Text>
                    </View>
                </TouchableOpacity>
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
        height: '100%',
        marginTop: 70,
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
        padding: 10,
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        width: '100%'
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
    userName: {
        color: '#4A4A4A',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    bellImage: {
        width: 25,
        height: 25,
        marginLeft: 40,
    },
    editButtom: {
        backgroundColor: 'white',
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        width: 280,
        height: 35,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    editButtomText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    mainInfoContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 190,
        padding: 20,
        marginBottom: 0
    },
    infoContainerLeft: {
        width: '50%',
        textAlign: 'left',
        // backgroundColor: '#B9B9B9',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    infoContainerRight: {
        width: '50%',
        textAlign: 'right',
        // backgroundColor: '#D4D4D4',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    infoText: {
        fontSize: 19,
        marginBottom: 20,
    },
    stats: {
        height: 280,
        width: '100%',
        marginBottom: 15,
        // backgroundColor: '#D4D4D4'
    },
    statButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: 'white',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal: 15,
    },
    statButtomLeft: {
        width: 120,
    },
    statButtomRight: {
        marginRight: 20,
    },
    statCardText: {
        fontSize: 18,
        textAlign: 'left',
    },
    logOutButtom: {
        backgroundColor: '#4CAF50',
        borderRadius: 18,
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderColor: '#000',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    logOutText: {
        fontSize: 19,
    }
});