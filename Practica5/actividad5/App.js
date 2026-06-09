import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil
        nombre="Daniela Lisset Elizalde Ortiz"
        carrera="Ingeniería en Sistemas Computacionales"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />
      <Perfil
        nombre="Jorge Torres"
        carrera="Ingeniería en Sistemas Computacionales"
        materia="POO"
        cuatrimestre="10°"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
