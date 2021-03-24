import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
