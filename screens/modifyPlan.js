import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { collection, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore";
import appFirebase from "../accesofirebase";
import { useState, useCallback } from "react";

const db = getFirestore(appFirebase);

const iconMap = {
  cardioPlan: require("../assets/cardioPlan.png"),
  stretchPlan: require("../assets/stretchPlan.png"),
  strengthPlan: require("../assets/strengthPlan.png"),
};

export default function ModifyPlan() {
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

  const handleDelete = async (id) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que quieres eliminar este ejercicio?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "modificarPlan", id));
              obtenerEjercicios();
              Alert.alert("Éxito", "Ejercicio eliminado");
            } catch (error) {
              console.log(error);
              Alert.alert("Error", "No se pudo eliminar el ejercicio");
            }
          },
        },
      ]
    );
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

        {/* TITULO */}
        <Text style={styles.title}>Nivel</Text>

        {/* NIVELES */}
        <View style={styles.levelTabs}>
          <TouchableOpacity style={[styles.levelButton, styles.activeLevel]}>
            <Text style={[styles.levelTextButton, styles.activeLevelText]}>
              Principiante
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.levelButton}>
            <Text style={styles.levelTextButton}>Intermedio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.levelButton}>
            <Text style={styles.levelTextButton}>Avanzado</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.currentLevelText}>Nivel actual: Intermedio</Text>

        <ScrollView>
          {exercises.map((item) => (
            <View key={item.id} style={styles.planCard}>
              <Image
                source={obtenerIcono(item.icono)}
                style={styles.planIcon}
              />
              <View style={styles.planInfo}>
                <Text style={styles.planTitle}>
                  Día {item.dia}: {item.nombre}
                </Text>
                <Text style={styles.planTime}>
                  {item.tiempo} min
                </Text>
              </View>
              <View style={styles.planActions}>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() =>
                    navigation.navigate("EditExercise", { exerciseId: item.id })
                  }
                >
                  <Image
                    source={require('../assets/editModifyPlan.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => handleDelete(item.id)}
                >
                  <Image
                    source={require('../assets/eliminateModifyPlan.png')}
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* BOTÓN AGREGAR EJERCICIO */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddExercise")}
        >
          <Text style={styles.addButtonText}>+ Agregar ejercicio</Text>
        </TouchableOpacity>

        {/* BOTÓN GUARDAR CAMBIOS */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.goBack()}
        >
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
    marginBottom: 30,
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
    marginLeft: 20,
  },
  rangeLabelText: {
    fontSize: 14,
    color: 'white',
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
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  planTime: {
    color: '#666',
    fontSize: 14,
  },
  planActions: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  actionIcon: {
    width: 28,
    height: 28,
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
