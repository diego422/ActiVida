import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Challenges() {
    return (
        <View style={styles.container}>
            <View style={styles.mainBox}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.userButtom}>
                        <Image source={require('../assets/userImage.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={styles.userRangeLabel}>
                        <Text style={styles.rangeLabelText}>Principiante</Text>
                    </View>
                    <Image source={require('../assets/bell.png')} style={styles.bellImage} />
                </View>

                {/* TÍTULO */}
                <Text style={styles.title}>Retos disponibles</Text>

                {/* TABS */}
                <View style={styles.tabsContainer}>
                    <TouchableOpacity style={[styles.tab, styles.activeTab]}>
                        <Text style={[styles.tabText, styles.activeTabText]}>Principiante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={styles.tabText}>Intermedio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={styles.tabText}>Avanzado</Text>
                    </TouchableOpacity>
                </View>

                {/* CARD 1 */}
                <View style={styles.challengeCard}>
                    <Image
                        source={require('../assets/climbStairsChallenge.png')}
                        style={styles.cardIcon}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.challengeText}>Sube las escaleras 40 veces</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.startButton}>
                                <Text style={styles.startButtonText}>Iniciar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* CARD 2 */}
                <View style={styles.challengeCard}>
                    <Image
                        source={require('../assets/walkinChallenge.png')}
                        style={styles.cardIcon}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.challengeText}>Caminar 2 Km</Text>
                        <View style={styles.progressContainer}>
                            <View style={styles.progressBar}>
                                <View style={[styles.progressFill, { width: '50%' }]} />
                            </View>
                            <View style={styles.progressLabelContainer}>
                                <Text style={styles.progressLabel}>1 Km</Text>
                                <Text style={styles.progressLabel}>50%</Text>
                            </View>
                        </View>
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
    height: '100%',
    marginTop: 70,
    backgroundColor: 'white',
    borderRadius: 15,
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
        justifyContent: 'space-between',
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
    },
    userRangeLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    rangeLabelText: {
        fontSize: 14,
        color: 'white',
    },
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    tab: {
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    tabText: {
        fontSize: 14,
        color: '#000',
    },
    activeTab: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    activeTabText: {
        color: '#fff',
    },
    challengeCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cardIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
    },
    challengeText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    startButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    startButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    progressContainer: {
        marginTop: 10,
    },
    progressBar: {
        height: 8,
        width: '100%',
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#4CAF50',
    },
    progressLabelContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLabel: {
        fontSize: 12,
        color: '#555',
    },
});
