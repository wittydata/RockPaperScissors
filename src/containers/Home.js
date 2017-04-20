import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import Menu from '../components/Menu'

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rock-paper-scissors</Text>

        <Menu {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffd9ab',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#f8feff',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50
  }
})
