import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native'

import Header from '../../../app/components/Header'
import Map from '../../../app/components/Map'
import Input from '../../../app/components/Input'

export default class Search extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.input}>
          <Input />
        </View>

        <View style={styles.mapa}>
          <Map />
        </View>

        <View style={styles.near}>
          <Text style={styles.txt}>NEAR</Text>
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
  input: {
    flex: 1,
    justifyContent: 'center'
  },
  mapa: {
    flex: 4,
    paddingHorizontal: 5
  },
  near: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  imgPlaceholder: {
    height: Dimensions.get('window').height - 560,
    width: Dimensions.get('window').width - 195,
    backgroundColor: '#fff'
  }
})
