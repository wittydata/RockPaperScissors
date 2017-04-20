import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { endRound, reset } from '../actions'
import BottomBar from '../components/BottomBar'
import Display from '../components/Display'
import Stats from '../components/Stats'
import TopBar from '../components/TopBar'

class Game extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TopBar {...this.props} />

        <Stats {...this.props} />

        <Display {...this.props} />

        <BottomBar {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffd9ab',
    flex: 1
  }
})

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  endRound,
  reset
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
