import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Progress() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.userButton}
                        onPress={() => navigation.navigate('ViewUserInfo')}>
                        <Image
                            source={require('../assets/userImage.png')}
                            style={styles.userImage}
                        />
                    </TouchableOpacity>
                    <View style={styles.userRangeLabel}>
                        <Text style={styles.rangeLabelText}>Principiante</Text>
                    </View>
                    <Image
                        source={require('../assets/bell.png')}
                        style={styles.bellImage}
                    />
                </View>

                {/* TÍTULO + FILTRO */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Registro y seguimiento</Text>
                    <Image
                        source={require('../assets/filtroProgress.png')}
                        style={styles.filterIcon}
                    />
                </View>

                {/* SELECT ACTIVIDADES */}
                <TouchableOpacity style={styles.activityButton}>
                    <Text style={styles.activityButtonText}>Todos las actividades</Text>
                    <Text style={styles.arrow}>{'v'}</Text>
                </TouchableOpacity>

                {/* TEXTO ACTIVIDAD */}
                <Text style={styles.activityTitle}>Caminar</Text>

                {/* TARJETA TIEMPO TOTAL */}
                <View style={styles.totalTimeCard}>
                    <Image
                        source={require('../assets/checkCircleProgress.png')}
                        style={styles.checkIcon}
                    />
                    <Text style={styles.totalTimeLabel}>Tiempo total</Text>
                    <Text style={styles.totalTimeValue}>95 min</Text>
                </View>

                {/* TARJETAS PEQUEÑAS */}
                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>23 min</Text>
                        <Text style={styles.statLabel}>Duración Promedio</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statValue}>2</Text>
                        <Text style={styles.statLabel}>Entrenamiento acumulado</Text>
                    </View>
                </View>

                {/* BOTONES DE ACTIVIDADES */}
                <TouchableOpacity style={styles.activityButton}>
                    <Text style={styles.activityButtonText}>Cardio</Text>
                    <Text style={styles.arrow}>{'>'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.activityButton}>
                    <Text style={styles.activityButtonText}>Bicicleta</Text>
                    <Text style={styles.arrow}>{'>'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.activityButton}>
                    <Text style={styles.activityButtonText}>Fuerza</Text>
                    <Text style={styles.arrow}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    userButton: {
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

    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },

    filterIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    activityTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },

    totalTimeCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },

    checkIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },

    totalTimeLabel: {
        fontSize: 14,
        color: '#333',
        marginRight: 10,
    },

    totalTimeValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    statCard: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },

    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },

    statLabel: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },

    activityButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },

    activityButtonText: {
        fontSize: 16,
        color: '#333',
    },

    arrow: {
        fontSize: 14,
        color: '#333',
        marginLeft: 5,
    },
});
