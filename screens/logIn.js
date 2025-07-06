import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

import app from '../accesofirebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app)

export default function LogIn(props) {

    //Credential authentication
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Iniciando sesión', 'Accediendo...')
            props.navigation.navigate('home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos')
        }
    }

    //Display
    return (
        <View style={styles.container}>
            <View style={styles.logInBox}>
                <Image source={require('../assets/LogoActiVida.png')} style={styles.logoImage}></Image>
                <Text style={styles.logoName}>ActiVida</Text>
                <View style={styles.inputBox}>
                    <Image source={require('../assets/Gmail.png')} style={styles.iconEnvelope}></Image>
                    <TextInput placeholder='Ingrese su correo' style={styles.placeholderText}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Image source={require('../assets/Candado.png')} style={styles.iconLock}></Image>
                    <TextInput placeholder='Ingrese su contraseña' style={styles.placeholderText}
                        onChangeText={(text) => setPassword(text)} secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={styles.logInButtom} onPress={logIn}>
                    <Text style={styles.textButtom}>Comenzar</Text>
                </TouchableOpacity>
                <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
                <Text style={styles.registerText}>Registrate</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logInBox: {
        width: '85%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
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
    logoImage: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginBottom: 8,
    },
    logoName: {
        color: '#4A4A4A',
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    inputBox: {
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 30,
        paddingVertical: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconEnvelope: {
        width: 45,
        height: 45,
        marginRight: 10
    },
    iconLock: {
        width: 35,
        height: 35,
        marginRight: 15,
        marginLeft: 5,
    },
    placeholderText: {
        paddingVertical: 10,
        fontSize: 20,
        color: 'black',
        width: '100%'
    },
    logInButtom: {
        backgroundColor: '#4CAF7596', //Los ultimos dos colores son el degradado
        width: 300,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textButtom: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    forgotText: {
        color: '#88888898',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
    registerText: {
        color: '#888888',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 150,
        textDecorationLine: 'underline',
    }

})