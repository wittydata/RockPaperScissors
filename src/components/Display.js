import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class Display extends Component {
  render () {
    const { round: { count, computer, player, result } } = this.props
    const resultStyle = [styles.bigText, styles.boldText]

    if (result === 'draw') {
      resultStyle.push(styles.yellow)
    } else if (result === 'lose') {
      resultStyle.push(styles.red)
    } else {
      resultStyle.push(styles.green)
    }

    return (
      <View style={styles.container}>
        {count > 0 ? <Text style={[styles.bigText, styles.boldText]}>Round {count}</Text> : null }

        <View style={styles.choices}>
          {(result && result !== '') ? (
            <View>
              <Text style={styles.boldText}>AI</Text>
              <Image source={getImage(computer)} style={styles.button} />
            </View>
          ) : (
            null
          )}

          {(result && result !== '') ? (
            <View>
              <Text style={styles.boldText}>You</Text>
              <Image source={getImage(player)} style={styles.button} />
            </View>
          ) : (
            null
          )}
        </View>

        <Text style={resultStyle}>{result ? `You ${result}!` : ''}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'space-around',
    marginBottom: 80,
    marginTop: 80
  },
  bigText: {
    fontSize: 21
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    borderRadius: 40,
    borderWidth: 1,
    height: 80,
    width: 80
  },
  choices: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  red: {
    color: 'crimson'
  },
  green: {
    color: 'seagreen'
  },
  yellow: {
    color: 'gold'
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
