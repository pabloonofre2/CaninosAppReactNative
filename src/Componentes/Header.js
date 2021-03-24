// Componente Header de la aplicacion con el titulo
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


/**
 * Retrna un componente de texto con un estilo espesifico
 * @param {} titulo Texto que se mostrara en la cabezera.
 */

const Header = (props) => {
    const {estiloTexto, estiloContenedor} = styles;
    return(
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );

};

// Estilo espesifico del header
const styles = StyleSheet.create({
    estiloTexto:{
        fontSize:25,
        color: "#fff",
        fontWeight: "bold",
    },
    estiloContenedor:{
        width:"100%",
        backgroundColor: "#343434",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
    }
});

export default Header;