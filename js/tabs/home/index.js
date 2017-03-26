import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

import Header from '../../../app/components/Header'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.main}>
          <Text style={styles.mainPlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.recentlyAdded}>
          <Text style={styles.txt}>RECENTLY ADDED</Text>
        </View>

        <View style={styles.rowOne}>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
          <Text style={styles.imgPlaceholder}>Placeholder</Text>
        </View>

        <View style={styles.rowTwo}>
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
