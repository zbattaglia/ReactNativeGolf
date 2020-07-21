import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    borderColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    width: 100,
    height: 20,
  },
  playerInputs: {
    flexDirection: 'row',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    marginRight: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#96A63C',
    borderRadius: 5,
  },
})

class HomePage extends Component {

  state = {
    player1: '',
    player2: '',
    player3: '',
    player4: '',
  }

  handleNameChange = ( player, name ) => {
    console.log( 'Got a change on', player, name)
    this.setState({
      [player]: name,
    })
  }

  handlePress = () => {
    console.log( 'Got a tee time:', this.state.player1, this.state.player2, this.state.player3, this.state.player4 );
    this.setState({
      player1: '',
      player2: '',
      player3: '',
      player4: '',
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Enter your groups names!
        </Text>
        <View style={styles.playerInputs}>
          <Text style={styles.label}>Player 1:</Text>
          <TextInput
            style={styles.textBox}
            value={this.state.player1}
            onChangeText={ (text) => this.handleNameChange( 'player1', text )}
          />
        </View>
        <View style={styles.playerInputs}>
          <Text style={styles.label}>Player 2:</Text>
          <TextInput
            style={styles.textBox}
            value={this.state.player2}
            onChangeText={ (text) => this.handleNameChange( 'player2', text )}
          />
        </View>   
        <View style={styles.playerInputs}>
          <Text style={styles.label}>Player 3:</Text>
          <TextInput
            style={styles.textBox}
            value={this.state.player3}
            onChangeText={ (text) => this.handleNameChange( 'player3', text )}
          />
        </View>          
        <View style={styles.playerInputs}>
          <Text style={styles.label}>Player 4:</Text>
          <TextInput
            style={styles.textBox}
            value={this.state.player4}
            onChangeText={ (text) => this.handleNameChange( 'player4', text )}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Button
            color='white'
            title='Submit'
            onPress={this.handlePress}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomePage;