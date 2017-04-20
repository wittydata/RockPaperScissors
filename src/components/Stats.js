import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Stats extends Component {
  render () {
    const { draw, lose, win } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.bold}>Win:</Text> <Text>{win}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Draw:</Text> <Text>{draw}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Lose:</Text> <Text>{lose}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 6,
    marginRight: 6
  },
  bold: {
    fontWeight: 'bold'
  },
  text: {
    color: '#585c84',
    fontSize: 21
  }
})
