import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
import { ImageBackground, StyleSheet } from 'react-native';

import HomePage from './Components/HomePage';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
})

const image = { url: 'https://blog.ihg.com/wp-content/uploads/2014/06/golf-green.jpg'}

class MyApp extends Component {
  render() {
    return(
      <ImageBackground style={styles.image} source={image}>
        <HomePage />
      </ImageBackground>
    )
  }
}

export default MyApp;