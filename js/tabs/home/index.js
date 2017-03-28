import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>

        <View style={styles.main}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.mainPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.recentlyAdded}>
          <Text style={styles.txt}>RECENTLY ADDED</Text>
        </View>

        <View style={styles.rowOne}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.rowTwo}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }

   _goToSpot = () => {
    this.props.navigator.push('spot')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252839'
  },
  main: {
    flex: 4,
    paddingHorizontal: 5,
    paddingTop: 10
  },
  mainPlaceholder: {
    flex: 1,
    backgroundColor: '#fff'
  },
  recentlyAdded: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5
  },
  rowOne: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  rowTwo: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  imgPlaceholder: {
    height: Dimensions.get('window').height - 560,
    width: Dimensions.get('window').width - 195,
    backgroundColor: '#fff'
  },
  txt: {
    color: '#B0F6E6',
    fontSize: 18
  }
})
