import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../../components/cabecalho';
import ButtonDefault from '../../components/Button';
import ProgressBar from '../../components/BarraProgresso';

export default function App() {
  const [number, setNumber] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const progress = number;
  
  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - pausedTime;

      intervalRef.current = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTimeRef.current;

        setElapsedTime(elapsed);
        setNumber((prevNumber) => prevNumber + 0.15);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setPausedTime(elapsedTime);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const zerarCronometro = () => {
   
    setElapsedTime(0)
      handleStop()
  };

  const zerarNumero= () =>{
    setNumber(0);
    zerarCronometro()

  }
  const zerar=() => {   
    zerarNumero() 
  }
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getStatus = () => {
    if (elapsedTime <= 300000) {
      return 'Ótimo';
    } else if (elapsedTime <= 600000) {
      return 'Bom';
    } else {
      return 'Ruim';
    }
  };

  return (
    <View>
      <Header />

      <TouchableOpacity onPress={isRunning === false ? handleStart : handleStop}>
        <Text style={styles.timeText}>{formatTime(elapsedTime)}</Text>
      </TouchableOpacity>
      
      <Text style={styles.textLitros}>{number.toFixed(2)} Litros</Text>

  
      <ProgressBar progress={progress} colors={[{ color: '#006600', progress: 25 }, { color: '006400', progress: 50 }, { color: 'd11200', progress: 100 }]} />
      <Text style={styles.textStatus}>Status: {getStatus()}</Text>
     

      <ButtonDefault title="Zerar" onPress={zerar}/>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  textLitros: {
    color: 'black',
    fontSize: 44,
    marginBottom: 20,
    textAlign:'center'
  },
  timeText: {
    color: '#008080',
    fontSize: 90,
    marginBottom: 20,
    textAlign: 'center',
  },
  containerLitros: {
    width: 99,
    height: 57,
    backgroundColor: '#D9D9D9',
  },

  textStatus: {
    marginTop: 70,
    textAlign: 'center',
    fontSize: 40,
    marginBottom:320
  },
});
