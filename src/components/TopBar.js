import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class TopBar extends Component {
  render () {
    const { reset, navigator } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigator.pop()}>
          <Text style={styles.button}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => reset()}>
          <Text style={styles.button}>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6
  },
  button: {
    borderColor: '#585c84',
    borderRadius: 6,
    borderWidth: 1,
    color: '#585c84',
    fontSize: 21,
    textAlign: 'center',
    width: 75
  }
})
