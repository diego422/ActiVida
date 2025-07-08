import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
  Image,
} from "react-native";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import appFirebase from "../accesofirebase";
import { useRoute, useNavigation } from "@react-navigation/native";

const db = getFirestore(appFirebase);

const availableIcons = [
  { name: "cardioPlan", image: require("../assets/cardioPlan.png") },
  { name: "stretchPlan", image: require("../assets/stretchPlan.png") },
  { name: "strengthPlan", image: require("../assets/strengthPlan.png") },
];

export default function EditExercise() {
  const route = useRoute();
  const navigation = useNavigation();
  const { exerciseId } = route.params;

  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);


  const [dia, setDia] = useState("");
  const [nombre, setNombre] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("cardioPlan");

  useEffect(() => {
    fetchExercise();
  }, []);

  const fetchExercise = async () => {
    try {
      const docRef = doc(db, "modificarPlan", exerciseId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setExercise(data);
        setDia(data.dia || "");
        setNombre(data.nombre || "");
        setTiempo(data.tiempo || "");
        setSelectedIcon(data.icono || "cardioPlan");
      } else {
        Alert.alert("Error", "Ejercicio no encontrado");
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al obtener el ejercicio");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, "modificarPlan", exerciseId);
      await updateDoc(docRef, {
        dia,
        nombre,
        tiempo,
        icono: selectedIcon,
      });
      Alert.alert("Éxito", "Ejercicio actualizado");
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "No se pudo actualizar el ejercicio");
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.loadingText}>Cargando ejercicio...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Editar Ejercicio</Text>

        <Text style={styles.label}>Día:</Text>
        <TextInput
          style={styles.input}
          value={dia}
          onChangeText={setDia}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Nombre del ejercicio:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Tiempo (min):</Text>
        <TextInput
          style={styles.input}
          value={tiempo}
          onChangeText={setTiempo}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Icono:</Text>
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

        <TouchableOpacity style={styles.btnGuardar} onPress={handleSave}>
          <Text style={styles.btnText}>Guardar Cambios</Text>
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

  container: {
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
    alignSelf: "flex-start",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },

  iconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
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

  btnGuardar: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 16,
    color: "#333",
  },
});
