import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

export default class Spot extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.btnWrapper}>
          <View style={styles.backBtn}>
            <TouchableWithoutFeedback onPress={this._goBack}>
              <Text style={styles.backBtnText}>Back</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={styles.main}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.mainPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.category}>
          <Text style={styles.txt}>Category:</Text>
        </View>

        <View style={styles.sketchyness}>
          <Text style={styles.txt}>Sketchyness:</Text>
        </View>

        <View style={styles.availability}>
          <Text style={styles.txt}>Availability:</Text>
        </View>

        <View style={styles.mapa}>
        </View>
      </View>
    )
  }

  _goBack = () => {
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252839'
  },
  btnWrapper: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10
  },
  backBtn: {
    flex: 1,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backBtnText: {
    color: '#E0106D'
  },
  main: {
    flex: 6,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  mainPlaceholder: {
    flex: 2,
    backgroundColor: '#fff'
  },
  category: {
    flex: 2,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  sketchyness: {
    flex: 2,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  availability: {
    flex: 2,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  mapa: {
    flex: 2,
    padding: 5
  },
  txt: {
    fontSize: 14,
    color: '#B0F6E6'
  }
})
