import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

export default class Choices extends Component {
  render () {
    const { endRound } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => endRound('rock')}>
          <Image source={require('../assets/img/rock.png')} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => endRound('paper')}>
          <Image source={require('../assets/img/paper.png')} style={styles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => endRound('scissors')}>
          <Image source={require('../assets/img/scissors.png')} style={styles.button} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e287',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    paddingTop: 20
  },
  button: {
    borderColor: '#dcf6ff',
    borderRadius: 40,
    borderWidth: 2,
    height: 80,
    width: 80
  }
})
