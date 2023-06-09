import React from "react";
import{View,TouchableOpacity,StyleSheet}from 'react-native'
import{Feather} from '@expo/vector-icons';

export default function FotoPrfil(){
    return(
    <View style={style.container}>
        <TouchableOpacity activeOpacity={0.6} style={style.fotoPerfil}>
            <Feather name="camera"  size={108} color='#000000'/>
        </TouchableOpacity>

</View>    

    )
}

const style = StyleSheet.create({
container:{
    alignItems:'center',

},
fotoPerfil:{
    width:154,
    height:154,
    backgroundColor:'#D9D9D9',
    justifyContent:'center', 
    alignItems:'center',
    borderRadius: 150 /2,  
    marginTop:30, 
}


});