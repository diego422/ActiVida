import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.userButtom}
                        onPress={() => navigation.navigate('ViewUserInfo')}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <Text style={styles.welcomeMsg}>Hola, Tiffany y Diego!</Text>
                    <Image source={require('../assets/bell.png')} style={styles.bellImage} />
                </View>
                <View style={styles.userRangeLabel}>
                    <Text style={styles.rangeLabelText}>Principiante</Text>
                </View>
                <View style={styles.challeges}>
                    <Text style={styles.title}>Retos de hoy</Text>
                    <View style={styles.cardsContainer}>
                        <TouchableOpacity style={styles.cards}>
                            <Image source={require('../assets/walkIcon.png')} style={styles.userImage} />
                            <Text style={styles.textCard}>Caminar</Text>
                            <Text style={styles.textCard}>3 KM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Text style={styles.textCard}>15 min de estiramiento</Text>
                            <View style={styles.statusLabel}>
                                <Text style={styles.statusLabelText}>Completado</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.plans}>
                    <Text style={styles.title}>Tu Plan personalizado</Text>
                    <TouchableOpacity style={styles.planButtom}>
                        <Text style={styles.planButtomText}>Plan Día 3: Cardio</Text>
                        <Image source={require('../assets/blueArrow.png')} style={styles.blueArrow} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Tu Actividad</Text>
                    <View style={styles.cardsContainer}>
                        <TouchableOpacity style={styles.cards}>
                            <Text style={styles.textCard}>Distancia recorrida</Text>
                            <Text style={[styles.textCard, { marginTop: 20 }]}>1,5 KM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <Text style={styles.textCard}>Tiempo de ejercicio</Text>
                            <Text style={[styles.textCard, { marginTop: 20 }]}>45 min</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.quoteLabel}>
                        <Text style={styles.quoteText}>¡Cada paso cuenta! 💪</Text>
                    </View>
                </View>
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
    welcomeMsg: {
        color: '#4A4A4A',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    bellImage: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
    userRangeLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        width: 110,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 10
    },
    rangeLabelText: {
        fontSize: 14,
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
    },
    challeges: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        marginBottom: 15,
    },
    cardsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    plans: {
        height: 100,
        width: '100%',
        marginBottom: 15,
    },
    planButtom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
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
    planButtomText: {
        fontSize: 18,
    },
    blueArrow: {
        width: 30,
        height: 30,
    },
    cards: {
        width: 120,
        height: 120,
        marginTop: 18,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCard: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5,
    },
    statusLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        width: 100,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    statusLabelText: {
        fontSize: 14,
    },
    quoteLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    quoteText: {
        fontSize: 17,
    }
});
