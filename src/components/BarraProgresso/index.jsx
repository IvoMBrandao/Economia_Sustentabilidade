import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  const getColor = () => {
    if (progress <= 45) {
      return '#14f100'; 
    } else if (progress <= 90) {
      return '#005911'; 
    } else {
      return '#d11200'; 
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.progressBar, { width: `${progress}%`, backgroundColor: getColor() }]}
      ></View>
      <Text style={styles.progressText}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop:40
  },
  progressBar: {
    height: '100%',
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProgressBar;