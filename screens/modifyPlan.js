import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function ModifyPlan() {
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


                {/* TITULO */}
                <Text style={styles.title}>Nivel</Text>

                {/* NIVELES */}
                <View style={styles.levelTabs}>
                    <TouchableOpacity style={[styles.levelButton, styles.activeLevel]}>
                        <Text style={[styles.levelTextButton, styles.activeLevelText]}>Principiante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.levelButton}>
                        <Text style={styles.levelTextButton}>Intermedio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.levelButton}>
                        <Text style={styles.levelTextButton}>Avanzado</Text>
                    </TouchableOpacity>
                </View>

                {/* NIVEL ACTUAL */}
                <Text style={styles.currentLevelText}>Nivel actual: Intermedio</Text>

                {/* PLAN CARDS */}
                <View style={styles.planCard}>
                    <Image source={require('../assets/cardioPlan.png')} style={styles.planIcon} />
                    <View style={styles.planInfo}>
                        <Text style={styles.planTitle}>Día 1: Cardio suave</Text>
                        <Text style={styles.planTime}>20 min</Text>
                    </View>
                    <View style={styles.planActions}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/editModifyPlan.png')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/eliminateModifyPlan.png')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.planCard}>
                    <Image source={require('../assets/stretchPlan.png')} style={styles.planIcon} />
                    <View style={styles.planInfo}>
                        <Text style={styles.planTitle}>Día 2: Estiramiento</Text>
                        <Text style={styles.planTime}>15 min</Text>
                    </View>
                    <View style={styles.planActions}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/editModifyPlan.png')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/eliminateModifyPlan.png')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.planCard}>
                    <Image source={require('../assets/strengthPlan.png')} style={styles.planIcon} />
                    <View style={styles.planInfo}>
                        <Text style={styles.planTitle}>Día 3: Fuerza</Text>
                        <Text style={styles.planTime}>30 min</Text>
                    </View>
                    <View style={styles.planActions}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/editModifyPlan.png')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image
                                source={require('../assets/eliminateModifyPlan.png')}
                                style={styles.actionIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* BOTÓN AGREGAR EJERCICIO */}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Agregar ejercicio</Text>
                </TouchableOpacity>

                {/* BOTÓN GUARDAR CAMBIOS */}
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Guardar cambios</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    mainBox: {
        flex: 1,
        width: '85%',
        marginTop: 70,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        marginBottom: 10,
    },
    userButtom: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: 50,
        height: 50,
    },
    userRangeLabel: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    rangeLabelText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bellImage: {
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5,
        color: '#000',
    },
    levelTabs: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 5,
    },
    levelButton: {
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    levelTextButton: {
        fontSize: 14,
        color: '#000',
    },
    activeLevel: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    activeLevelText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    currentLevelText: {
        fontSize: 14,
        marginBottom: 15,
        marginLeft: 5,
    },
    planCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 4,
    },
    planIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    planInfo: {
        flex: 1,
    },
    planTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    planTime: {
        fontSize: 14,
        color: '#666',
    },
    planActions: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 10,
    },
    actionIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    addButton: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#4CAF50',
        fontSize: 16,
        fontWeight: 'bold',
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
