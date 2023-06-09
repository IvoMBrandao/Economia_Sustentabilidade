
 import React from 'react';
 import { StyleSheet, TouchableOpacity, Text } from 'react-native';
 
 const ButtonDefault = ({ title, onPress }) => {
   return (
     <TouchableOpacity style={styles.buttonStart} onPress={onPress}>
       <Text style={styles.buttonText}>{title}</Text>
     </TouchableOpacity>
   );
 };
 
 const styles = StyleSheet.create({
   buttonStart: {
     backgroundColor: '#008080',
     borderRadius: 50,
     paddingVertical: 15,
     width: '60%',
     alignSelf: 'center',
     bottom: '15%',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 0,
   },
   buttonText: {
     color: '#FFFFFF',
     textAlign: 'center',
     fontSize: 20,
   },
 });
 
 export default ButtonDefault;
 