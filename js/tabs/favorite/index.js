import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'

import Header from '../../../app/components/Header'

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>

        <View style={styles.favorites}>
          <Text style={styles.txt}>FAVORITES</Text>
        </View>

        <View style={styles.rowOne}>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.rowTwo}>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.rowThree}>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.rowFour}>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
        </View>
      </View>
    )
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
