import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AwardsPage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/backButton.png')} style={styles.backButton} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.userButtom}
                        onPress={() => navigation.navigate('ViewUserInfo')}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={styles.userRangeLabel}>
                        <Text style={styles.rangeLabelText}>Principiante</Text>
                    </View>
                    <Image source={require('../assets/bell.png')} style={styles.bellImage} />
                </View>
                <Text style={styles.title}>Recompensas</Text>

                <View style={styles.awardLabel}>
                    <View style={styles.awardLeftContainer}>
                        <Image source={require('../assets/medal.png')} style={styles.awardIcon} />
                    </View>
                    <View style={styles.awardCenterContainer}>
                        <Text style={[styles.awardLabelText, { fontWeight: 'bold' }]}>Comienza tu viaje</Text>
                        <Text style={styles.awardLabelText}>Completaste el primer reto</Text>
                    </View>
                    <View style={styles.awardRightContainer}>
                        <Image source={require('../assets/completeIcon.png')} style={styles.completeIcon} />
                    </View>
                </View>
                <View style={styles.awardLabel}>
                    <View style={styles.awardLeftContainer}>
                        <Image source={require('../assets/fire.png')} style={styles.awardIcon} />
                    </View>
                    <View style={styles.awardCenterContainer}>
                        <Text style={[styles.awardLabelText, { fontWeight: 'bold' }]}>Cinco días seguidos</Text>
                        <Text style={styles.awardLabelText}>Lograste una racha de 5 días</Text>
                    </View>
                    <View style={styles.awardRightContainer}>
                        <Image source={require('../assets/completeIcon.png')} style={styles.completeIcon} />
                    </View>
                </View>
                <View style={styles.awardLabel}>
                    <View style={styles.awardLeftContainer}>
                        <Image source={require('../assets/trophyLock.png')} style={styles.awardIcon} />
                    </View>
                    <View style={styles.awardCenterContainer}>
                        <Text style={[styles.awardLabelText, { fontWeight: 'bold' }]}>Máxima racha</Text>
                        <Text style={styles.awardLabelText}>Supera tu mejor racha anterior</Text>
                    </View>
                    <View style={styles.awardRightContainer}>
                        <Image source={require('../assets/lock.png')} style={styles.completeIcon} />
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
        flex: 1,
        width: '85%',
        marginTop: 70,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        width: '100%',
    },
    backButton: {
        width: 30,
        height: 30,
        marginRight: 10,
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
        marginLeft: 'auto',
        marginRight: 20,
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
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        marginTop: 30,
    },
    awardLabel: {
        flexDirection: 'row',
        height: 120,
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft: 8,
        marginRight: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    awardLeftContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70
    },
    awardIcon: {
        width: 45,
        height: 45,
    },
    awardCenterContainer: {
        width: 185,
        justifyContent: 'center',
        gap: 15,
    },
    awardRightContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 20,
        marginBottom: 10,
    },
    completeIcon: {
        width: 40,
        height: 40,
    },
    awardLabelText: {
        fontSize: 19,
    },
});
