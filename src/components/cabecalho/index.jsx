import React from "react"; 
import{
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import{Feather} from '@expo/vector-icons';
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64 ;

export default function Header({name}){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.username}>Ivo Felipe</Text> 
            <TouchableOpacity activeOpacity={0.6} style={styles.buttomUser}>
         <Feather name="user" size={35} color='#FFF'/>
         </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#008080',
        paddingTop:StatusBarHeight,
        flexDirection:"row",
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:25,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,

    },
    content:{
            flex:1,
            alignItems:"center",
            flexDirection:'row',
            justifyContent:'space-between',
    },
    username:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'        

    },
    buttomUser:{
        width:60,
        height:60,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        justifyContent:'center', 
        alignItems:'center',
        borderRadius: 60 /2,   
    }
    })