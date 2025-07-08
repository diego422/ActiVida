import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView, Alert } from "react-native";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import appFirebase from "../accesofirebase";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const db = getFirestore(appFirebase);

const availableIcons = [
    { name: "cardioPlan", image: require("../assets/cardioPlan.png") },
    { name: "stretchPlan", image: require("../assets/stretchPlan.png") },
    { name: "strengthPlan", image: require("../assets/strengthPlan.png") },
];

export default function AddExercise() {
    const navigation = useNavigation();

    const [dia, setDia] = useState("");
    const [nombre, setNombre] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [selectedIcon, setSelectedIcon] = useState("cardioPlan");

    const handleGuardar = async () => {
        if (!dia || !nombre || !tiempo) {
            Alert.alert("Campos incompletos", "Completa todos los campos");
            return;
        }
        await addDoc(collection(db, "modificarPlan"), {
            dia,
            nombre,
            tiempo,
            icono: selectedIcon,
        });
        Alert.alert("Éxito", "Ejercicio guardado");
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/backButton.png')} style={styles.backButton} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title}>Agregar Ejercicio</Text>

                <TextInput
                    placeholder="Día (ej. 1)"
                    style={styles.input}
                    value={dia}
                    onChangeText={setDia}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Nombre ejercicio"
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    placeholder="Tiempo (min)"
                    style={styles.input}
                    value={tiempo}
                    onChangeText={setTiempo}
                    keyboardType="numeric"
                />

                <Text style={styles.subtitle}>Selecciona un icono:</Text>
                <View style={styles.iconsRow}>
                    {availableIcons.map((icon) => (
                        <TouchableOpacity
                            key={icon.name}
                            onPress={() => setSelectedIcon(icon.name)}
                            style={[
                                styles.iconBox,
                                selectedIcon === icon.name && styles.activeIconBox,
                            ]}
                        >
                            <Image source={icon.image} style={styles.iconImage} />
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleGuardar}>
                    <Text style={styles.saveButtonText}>Guardar Ejercicio</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },

    buttonContainer: {
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 10,
    },

    backButton: {
        width: 30,
        height: 30,
        marginRight: 10,
    },

    container: {
        alignItems: "center",
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#000",
    },

    subtitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        color: "#333",
    },

    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },

    iconsRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },

    iconBox: {
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: "transparent",
        padding: 5,
        borderRadius: 8,
    },

    activeIconBox: {
        borderColor: "#4CAF50",
    },

    iconImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },

    saveButton: {
        marginTop: 20,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
    },

    saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

