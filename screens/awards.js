import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function awardsPage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.userButtom}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={styles.userRangeLabel}>
                        <Text style={styles.rangeLabelText}>Principiante</Text>
                    </View>
                    <Image source={require('../assets/bell.png')} style={styles.bellImage} />
                </View>
                <Text style={styles.title}>Recompensas</Text>
                <View style={styles.awards}>
                    <View style={styles.awardLabel}>
                        <Text style={styles.planButtomText}>Plan Día 3: Cardio</Text>
                        <Image source={require('../assets/blueArrow.png')} style={styles.blueArrow} />
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
        justifyContent: 'center',
        marginLeft: 20,
    },
    userImage: {
        width: 50,
        height: 50,
    },
    userRangeLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        width: 110,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 12
    },
    rangeLabelText: {
        fontSize: 14,
    },
    bellImage: {
        width: 25,
        height: 25,
        marginLeft: 65,
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
        textAlign: 'center',
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
    awards: {
        height: 100,
        width: '100%',
        marginBottom: 15,
    },
    awardLabel: {
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
