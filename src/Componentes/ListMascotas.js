import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios'; 
import BoxInfo from './BoxInfo';  


class ListaMascotas extends Component{
    state = {listaMascotas:[]}; 
    
    
    url = "http://192.168.0.17:3000/mascotas"; 
    
    
    componentDidMount(){
        axios.get(this.url)
        .then(response =>{
            this.setState({listaMascotas: response.data});
        })
        .catch(error => {
            console.log("Error! :  " + error);
        });
    }

  
    MostrarLista = () =>{
        return this.state.listaMascotas.map(mascota => {
            return <BoxInfo key={mascota.id} mascota={mascota}></BoxInfo>
        })
    }

    render(){
        
        return <ScrollView style={styles.scrolStyle}>{this.MostrarLista()}</ScrollView>;
    }

}

const styles ={
    scrolStyle:{
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
    }
}


export default ListaMascotas;