import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  ListView
} from 'react-native'

export default class Home extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      loading: false,
      dataSource: ds.cloneWithRows([
        {
          image: 'https://cdn.pixabay.com/photo/2015/03/26/09/46/skateboard-690269_1280.jpg'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2015/03/26/09/46/skateboard-690269_1280.jpg'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2015/03/26/09/46/skateboard-690269_1280.jpg'
        },
        {
          image: 'https://cdn.pixabay.com/photo/2015/03/26/09/46/skateboard-690269_1280.jpg'
        }
      ]),
      spots: []
    }
  }

  // componentDidMount () {
  //   fetch(`http://localhost:3000/spots?sort=descending`)
  //     .then(data => {
  //       this.setState({
  //         loading: false,
  //         spots: data,
  //         dataSource: ds.cloneWithRows(data)
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  render () {
    return (
      <View style={styles.container}>
        
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Image source={require('../../../assets/icons/ic_elspotpink.png')} />
          </View>
        </View>

        <Text style={styles.txt}>RECENTLY ADDED</Text>
        <View style={styles.recentlyAddedContainer}>
          <ListView
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={styles.recentlyAdded}
            dataSource={this.state.dataSource}
            enableEmptySections
            renderRow={(spot) => {
              return (
                <TouchableWithoutFeedback style={styles.imgButton}>
                  <View style={styles.imgFrame}>
                    <Image style={styles.img} source={{ uri: spot.image }} />
                  </View>
                </TouchableWithoutFeedback>
              )
            }}
          />
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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#252839'
  },
  headerContainer: {
    height: 55,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF5FA',
    paddingTop: 10
  },
  recentlyAddedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recentlyAdded: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    color: '#B0F6E6',
    fontSize: 18,
    padding: 20
  },
  imgButton: {
    padding: 25
  },
  imgFrame: {
    width: (Dimensions.get('window').width / 2) - 10,
    height: 100
  },
  img: {
    width: (Dimensions.get('window').width / 2)  - 20,
    height: 90,
  }
})
