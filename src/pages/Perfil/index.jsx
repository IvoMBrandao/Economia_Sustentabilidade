import React from 'react';
import{View, Text, StyleSheet,} from 'react-native'
import Header from '../../components/cabecalho';
import InputName from '../../components/InputNome';
import FotoPrfil from '../../components/FotoPerfil';
import ButtonDefault from '../../components/Button';

export default function Perfil(){
   
    return(
        <View>
         <Header/>
         <Text style={style.textoPerfil}>Perfil</Text>
         <FotoPrfil/>
         <InputName/>
         <ButtonDefault title="Salvar" />
        </View>
        

    )
   
}


const style=StyleSheet.create({

    textoPerfil:{
        marginTop:27,
        textAlign:'center',
        fontSize:30,
        color:'Black'
    }
});