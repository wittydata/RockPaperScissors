import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export default class Choices extends Component {
  render () {
    const { handleEndRound } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleEndRound('rock')}>
          <Image source={require('../assets/img/rock.png')} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEndRound('paper')}>
          <Image source={require('../assets/img/paper.png')} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEndRound('scissors')}>
          <Image source={require('../assets/img/scissors.png')} style={styles.button} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: 40,
    borderWidth: 1,
    height: 80,
    width: 80
  }
})
