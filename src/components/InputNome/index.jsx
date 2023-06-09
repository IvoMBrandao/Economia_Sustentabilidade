import react from "react";
import {SafeAreaView, Text, TextInput,StyleSheet} from 'react-native';

export default function InputName(){
return(

    <SafeAreaView style={style.Container}>
        <Text style={style.nome}>Nome:</Text>
        <TextInput
        style={style.textInput}
        placeholder="Nome"
        />
    </SafeAreaView>


);




}

const style = StyleSheet.create({
    Container:{
       marginTop:130,
       
    },

    textInput:{
        borderWidth:1,
        marginBottom:280,
        marginTop:3,
        padding:10,
        fontSize:18,
        borderRadius:25,
        backgroundColor:'#D9D9D9'

    },

    nome:{
        fontSize:30
    }
    

});