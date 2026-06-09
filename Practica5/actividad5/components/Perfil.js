/* PERFIL usando Desestructuración */

import React from 'react';
import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@react-navigation/elements';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Text> {nombre} </Text>

      { mostrar && 
      <>  
      <Text> {carrera} </Text>
      <Text> {materia} </Text>
      <Text> {cuatrimestre} </Text>
      </>
       }
    <Button title=" Ver Perfil"  onPress={() => setMostrar(!mostrar)} />


    </View>
  );
}

/* PERFIL usando Props

import React from 'react';
import { Text, View } from 'react-native';

export const Perfil = (props) => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre: {props.nombre}</Text>
      <Text>Carrera: {props.carrera}</Text>
      <Text>Materia: {props.materia}</Text>
      <Text>Cuatrimestre: {props.cuatrimestre}</Text>
    </View>
  );
} */
