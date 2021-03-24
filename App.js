import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

// Componente Header de la aplicacion, para mostrar la cabezera.
import Header from './src/Componentes/Header';

// Componenete que lista las mascotas
import ListMascotas from './src/Componentes/ListMascotas';

// vista pricipal de la aplicacion
export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo={'CANINOS'}/>
      <ImageBackground source={imagen} style={styles.fondo}>
        <ListMascotas/>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

// imagen de fondo de la vista general 
const imagen = require("./src/images/fondo.jpg");

//estilos de la vista general
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%"
  }
});
