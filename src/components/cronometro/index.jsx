import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CronometroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      running: false,
    };
    this.timer = null;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    this.setState({
      running: true,
    });

    this.timer = setInterval(() => {
      let { minutes, seconds } = this.state;
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      else{
        stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      running: false,
    });
  };
      }
      this.setState({ minutes, seconds });
    }, 1000);

   
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      running: false,
    });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      minutes: 0,
      seconds: 0,
      running: false,
    });
  };

  
  render() {
    const { minutes, seconds, running } = this.state;

    return (
      <View style={styles.container}>
         {!running ? (
          <TouchableOpacity style={styles.button} onPress={this.startTimer}>
          
        <Text style={styles.timeText}>
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </Text>
       
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={this.stopTimer}>
             <Text style={styles.timeText}>
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </Text>
       
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={this.resetTimer}>
          <Text style={styles.buttonText}>Resetar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
   marginTop:40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color:'#008080',
    fontSize: 90,
    marginBottom: 20,
    textAlign:'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default CronometroApp;
