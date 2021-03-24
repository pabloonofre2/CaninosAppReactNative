import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

/**
 * Componente que muestra un boton de tipo TouchableOpacity con una funcion onPress parametro.
 * @param {Function} props.botonPresionado funcion que realizara la aplicacion al precionar este componente.
 * @return {TouchableOpacity} TouchableOpacity con texto y estilo de Boton
 */
const Button = (props) =>{
    const {estiloTexto, estiloBoton} = styles;

    return (
        <TouchableOpacity style={estiloBoton} onPress={props.botonPresionado}>
                <Text style={estiloTexto} >{props.children}</Text>
        </TouchableOpacity>
    );
};

// Estilos del boton
const styles = StyleSheet.create({
    estiloTexto:{
        fontSize: 20,
        fontWeight: '500',
        paddingBottom: 3,
        color: 'black'
    },
    estiloBoton:{
        borderColor: 'rgb(254, 216, 99)',
        alignSelf: 'center',
        backgroundColor: 'rgb(229, 173, 2)',
        alignItems: 'center',
        borderWidth: .5,
        paddingTop: 2,
        marginTop:10,
        marginLeft:7,
        marginRight: 7,
        marginBottom:15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft:15,
        paddingRight: 15,
        borderRadius: 5
    }
});

export default Button;