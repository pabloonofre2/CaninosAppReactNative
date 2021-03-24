import React from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';

import Item from './Item'; // item, para mostrar la informacion
import ItemSection from './ItemSection'; //seccion de item
import Button from './Button'; //boton 

/**
 * extrae y muestra toda la infomrmacion de una sola mascota de porps.
 * @param {*} props datos de una mascota siguiendo el modelo de la tabla mascotas.
 * @return {Item} Componente Item con todos los datos de una mascota.
 */
const BoxInfo = (props) => {
    return(
        <Item>
            <ItemSection>
                <Text style={styles.textBold, styles.estiloTitulo}>Mascota {props.mascota.id}</Text>
            </ItemSection>            
            <ItemSection>
                    <Image style={styles.estiloImagen} source={{uri: props.mascota.imagen}} />
            </ItemSection>
            <ItemSection>
                <View style={styles.estiloDesc}>
                        <Text style={styles.estiloTextoDesc}><Text style={styles.textBold}>Raza: </Text>{props.mascota.raza}</Text>
                        <Text style={styles.estiloTextoDesc}><Text style={styles.textBold}>Nombre: </Text>{props.mascota.nombre}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Button botonPresionado={() => {Linking.openURL(props.mascota.información)}}>Mas Información</Button>
            </ItemSection>
        </Item>
    );
};

// estilos para el cuadro de informacion de la mascotas
const styles = StyleSheet.create({
    estiloTitulo:{
        alignSelf: "center",
        fontSize: 25,
        color: "#FFFFFF"
    },
    estiloImagen:{
        alignSelf: "center",
        height: 400,
        width: "90%",
        margin:10,
    },
    estiloDesc:{
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 30,
    },
    estiloTextoDesc:{
        fontSize:20,
        color: "#FFFFFF",
    },
    estiloBoton:{
        alignSelf: "center"
    },
    textBold:{
        fontWeight: "bold",
    }

    
});

export default BoxInfo;