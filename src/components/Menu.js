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
    borderRadius: 6,
    borderWidth: 1,
    height: 24,
    paddingTop: 3,
    textAlign: 'center',
    width: 120
  }
})
