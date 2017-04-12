import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import Menu from '../components/Menu'

class Home extends Component {
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50
  }
})
