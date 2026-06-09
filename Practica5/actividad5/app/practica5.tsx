import { View, Image, Text } from 'react-native';
import { Saludo } from '../components/Saludo';
import { Saludo2 } from '../components/Saludo2';

export default function Practica5Screen() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Image source={require('../assets/images/wave.png')} />
      <Text>Hola Mundo React Native</Text>
      <Text>------------------------------</Text>
      <Saludo />
      <Text>------------------------------</Text>
      <Saludo2 />
    </View>
  );
}
