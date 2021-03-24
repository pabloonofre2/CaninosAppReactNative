import React from 'react';
import {View, Text} from 'react-native';

/**
 *  Componente que servira  para seccionar la informacion de una mascota
 *  dentro de un componente Item.
 *  @return {View} View con estilo de seccion. 
 */
const ItemSection = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};


const styles={
    estiloContenedor:{
        flexDirection:"column"
    }
};

export default ItemSection;