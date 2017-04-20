import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Menu extends Component {
  render () {
    const { navigator, routes } = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigator.push(routes[1])}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 5
  },
  menuText: {
    borderColor: '#585c48',
    borderRadius: 6,
    borderWidth: 1,
    color: '#585c48',
    fontSize: 21,
    paddingTop: 2,
    textAlign: 'center',
    width: 120
  }
})
