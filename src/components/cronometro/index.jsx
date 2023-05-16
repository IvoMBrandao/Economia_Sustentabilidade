import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
class Cronometro extends Component{


  constructor(props){
    super(props);
    this.state = {
    numero:0,
    botao:'',
    Clean:'',
    ultimoTempo:null,
    };
    this.timer = null;
    this.start = this.start.bind(this)
    this.pause = this.Clean.bind(this)
  }
  
start(){
  if(this.timer != null){
    clearInterval(this.timer)
    this.timer=null; 
    //parar
    this.setState({botao:''}) 
  }
  else{
    this.timer = setInterval( () => {
      this.setState({numero: this.state.numero + 0.01})
      //time
     
     },100)

     this.setState({botao:''})
  }

}


Clean(){
if(this.timer != null){
clearInterval(this.timer)
this.timer=null; }
this.setState({
  ultimoTempo :this.state.numero.toFixed(2),
  numero:0,
  botao:'Start'
})
}
  render(){
  return (
    <View style={styles.container}>
   
      <StatusBar style="auto" />
     
     
      <View style={styles.viewBotao}>
      <TouchableOpacity style={styles.botao} onPress={this.start}>
        
        <Text style={styles.texto}>{this.state.botao}</Text>
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>
        
      </TouchableOpacity>


      </View>
      

     
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop:-100,
    fontSize:65,
    color:'#008080',
    fontWeight:'bold'
  },
  viewBotao:{
    flexDirection:'column',
    marginTop:70,
    height:900,
    width:9000,
  },
botao:{
flex:1,
justifyContent:'center',
alignItems:'center',
//backgroundColor:'#00008b',
height:40,
margin:17,
borderRadius:9,
//backgroundColor: pressed ? '#red'
},
texto:{
fontSize:25,
fontWeight:'bold',
color:'blue',
},
ultimo:{
  marginTop:40,
},
ultimoTexto:{
  fontSize:30,
  color:'#fff'
}




});
export default  Cronometro;