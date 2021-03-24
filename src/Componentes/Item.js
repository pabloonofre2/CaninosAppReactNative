import React from 'react';
import {View, StyleSheet} from 'react-native';


const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};


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