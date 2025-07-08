import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import appFirebase from '../accesofirebase';
import { useState, useCallback } from 'react';

const db = getFirestore(appFirebase);

const iconMap = {
    cardioPlan: require("../assets/cardioPlan.png"),
    stretchPlan: require("../assets/stretchPlan.png"),
    strengthPlan: require("../assets/strengthPlan.png"),
};

export default function Plan() {
    const navigation = useNavigation();
    const [exercises, setExercises] = useState([]);

    useFocusEffect(
        useCallback(() => {
            obtenerEjercicios();
        }, [])
    );

    const obtenerEjercicios = async () => {
        const snapshot = await getDocs(collection(db, "modificarPlan"));
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setExercises(data);
    };

    const obtenerIcono = (iconName) => {
        return iconMap[iconName] || iconMap.cardioPlan;
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>

                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.userButtom}
                        onPress={() => navigation.navigate('ViewUserInfo')}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={styles.userRangeLabel}>
                        <Text style={styles.rangeLabelText}>Principiante</Text>
                    </View>
                    <Image source={require('../assets/bell.png')} style={styles.bellImage} />
                </View>

                {/* MENSAJE BIENVENIDA */}
                <Text style={styles.greetingText}>¡Buen trabajo hoy, Diego! 💪</Text>

                {/* BARRA DE PROGRESO DEL PLAN */}
                <View style={styles.progressPlanContainer}>
                    <View style={styles.progressDone}>
                        <Text style={styles.progressDoneText}>3 de 4 días completados</Text>
                    </View>
                    <View style={styles.progressRemaining} />
                </View>

                {/* NIVEL ACTUAL */}
                <Text style={styles.levelText}>Nivel actual: Intermedio</Text>

                {/* DIAS DEL PLAN */}
                <ScrollView>
                    {exercises.map((item) => (
                        <View key={item.id} style={styles.planCard}>
                            <Image
                                source={obtenerIcono(item.icono)}
                                style={styles.planIcon}
                            />
                            <View style={styles.planCardContent}>
                                <Text style={styles.planCardTitle}>
                                    Día {item.dia}: {item.nombre}
                                </Text>
                                <Text style={styles.planCardSubtitle}>
                                    {item.tiempo} min
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.detailLink}>Ver detalles</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* BOTÓN MODIFICAR PLAN */}
                <TouchableOpacity
                    style={styles.modifyButton}
                    onPress={() => navigation.navigate('ModifyPlan')}
                >
                    <Text style={styles.modifyButtonText}>Modificar plan</Text>
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
        flex: 1,
        width: '85%',
        height: '100%',
        marginTop: 70,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
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
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    userButtom: {
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: 50,
        height: 50,
    },
    bellImage: {
        width: 25,
        height: 25,
        marginLeft: 'auto'
    },
    userRangeLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginLeft: 10,
    },
    rangeLabelText: {
        fontSize: 14,
        color: 'white',
    },
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 10,
    },
    progressPlanContainer: {
        flexDirection: 'row',
        height: 25,
        width: '80%',
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: 10,
        marginBottom: 10,
    },
    progressDone: {
        backgroundColor: '#4CAF50',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressDoneText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    progressRemaining: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    levelText: {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 15,
    },
    planCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    planIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    planCardContent: {
        flex: 1,
    },
    planCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    planCardSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    detailLink: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    modifyButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    modifyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
