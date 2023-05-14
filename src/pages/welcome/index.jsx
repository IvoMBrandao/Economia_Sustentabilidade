import React from 'react';
import{View, Text, StyleSheet,Image, Touchable, TouchableOpacity} from 'react-native'

export default function Welcome(){
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                style={styles.img}
                 source={require('../../../assets/Img/shower.png')}
                 />
            </View>
        

            <View style={styles.ViewText}>
            <Text style={styles.title}> Economia e Sustentabilidade </Text>
            <Text style={styles.subTitle}> Tenha o controle dos gastos gerados pelos banhos em sua casa</Text>


            <TouchableOpacity style={styles.buton}>
            <Text style={styles.textButon}>Economizar</Text>
            </TouchableOpacity>

             </View>
           

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
    }


    
    
})