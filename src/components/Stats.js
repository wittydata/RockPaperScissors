import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Stats extends Component {
  render () {
    const { draw, lose, win } = this.props.stats
    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.bold}>Win:</Text> <Text>{win}</Text>
        </Text>

        <Text>
          <Text style={styles.bold}>Draw:</Text> <Text>{draw}</Text>
        </Text>

        <Text>
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
    justifyContent: 'space-between'
  },
  bold: {
    fontWeight: 'bold'
  }
})
