import React from 'react';
import {View, StyleSheet} from 'react-native';

/**
 * Componenten que da una estructura general para mostrar la informacion de una mascota.
 * @return {View} View con estilo de Item
 */
const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

//Estilos del componente item
const styles = StyleSheet.create({
    estiloContenedor:{
        flexDirection:"column",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        paddingTop:15,
        paddingBottom:15,        
        borderWidth: 5,     
        borderRadius: 10    
    }
});

export default Item;