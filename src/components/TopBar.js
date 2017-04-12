import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class TopBar extends Component {
  render () {
    const { handleNewRound, handleNewStats, navigator } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigator.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleNewRound()
            handleNewStats()
          }}
        >
          <Text>Reset</Text>
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
    marginBottom: 4,
    marginTop: 4
  },
  button: {
    borderRadius: 40,
    borderWidth: 1,
    height: 80,
    width: 80
  }
})
