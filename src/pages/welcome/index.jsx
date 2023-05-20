import React from 'react';
import{View, Text, StyleSheet,Image, Touchable, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome(){
   const navigation= useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Animatable.Image 
                animation="flipInY"
                style={styles.img}
                 source={require('../../../assets/Img/shower.png')}
                 />
            </View>
        

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.ViewText}>
                <Text style={styles.title}> Economia e Sustentabilidade </Text>
                <Text style={styles.subTitle}> Tenha o controle dos gastos gerados pelos banhos em sua casa</Text>


                <TouchableOpacity 
                style={styles.buton}
                onPress={()=> navigation.navigate('inicio')}
                >
                    <Text style={styles.textButon}>Vamos lá</Text>
                </TouchableOpacity>

             </Animatable.View>
           

        </View>
    );
}



const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#008080',
        

    },
    img:{   
        width:100,
        height:100,
    },
    viewImg:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
       
    },
    ViewText:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%',
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:25,
        marginBottom:25
    },
    buton:{
        position:'absolute',
        backgroundColor:'#008080',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf:'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    textButon:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:15,
        textAlign:'center',

    }


    
    
})