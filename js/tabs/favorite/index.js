import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native'

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.favorites}>
          <Text style={styles.txt}>FAVORITES</Text>
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

        <View style={styles.rowThree}>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this._goToSpot}>
            <Text style={styles.imgPlaceholder}>Placeholder</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.rowFour}>
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
  header: {
    flex: 1
  },
  favorites: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  txt: {
    color: '#B0F6E6',
    fontSize: 18
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
  rowThree: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  rowFour: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  imgPlaceholder: {
    height: Dimensions.get('window').height - 560,
    width: Dimensions.get('window').width - 195,
    backgroundColor: '#fff'
  }
})
