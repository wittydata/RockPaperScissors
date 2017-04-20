import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class Display extends Component {
  render () {
    const { count, computer, player, result } = this.props
    const resultStyle = [styles.result]

    if (result === 'draw') {
      resultStyle.push(styles.yellow)
    } else if (result === 'lose') {
      resultStyle.push(styles.red)
    } else {
      resultStyle.push(styles.green)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{count > 0 ? `Round ${count}` : ''}</Text>

        {(result && result !== '') ? (
          <View style={styles.choices}>
            <Image source={getImage(computer)} style={styles.button} />
            <Text style={styles.player}>AI</Text>
          </View>
        ) : (
          null
        )}

        <Text style={resultStyle}>{result ? `You ${result}!` : ''}</Text>

        {(result && result !== '') ? (
          <View style={styles.choices}>
            <Image source={getImage(player)} style={styles.button} />
            <Text style={styles.player}>You</Text>
          </View>
        ) : (
          null
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    margin: 6
  },
  button: {
    borderColor: '#dcf6ff',
    borderRadius: 60,
    borderWidth: 2,
    height: 120,
    width: 120
  },
  choices: {
    alignItems: 'center'
  },
  player: {
    color: '#585c84',
    fontSize: 21,
    fontWeight: 'bold'
  },
  result: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  title: {
    color: '#585c84',
    fontSize: 28,
    fontWeight: 'bold'
  },
  red: {
    color: 'crimson'
  },
  green: {
    color: 'seagreen'
  },
  yellow: {
    color: '#80869b'
  }
})

function getImage (choice) {
  if (choice === 'paper') {
    return require('../assets/img/paper.png')
  } else if (choice === 'rock') {
    return require('../assets/img/rock.png')
  }

  return require('../assets/img/scissors.png')
}
