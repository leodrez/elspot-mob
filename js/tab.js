import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import Router from './router'


// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
export default class Tab extends Component {
  static route = {
    navigationBar: {
      visible: false,
    }
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="home">
        <TabItem
          style={styles.cont}
          id="home"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_home.png')} /> }>
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>

        <TabItem
          style={styles.cont}
          id="search"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_search.png')} /> }>
          <StackNavigation
            id="posts"
            initialRoute={Router.getRoute('search')}
          />
        </TabItem>

        <TabItem
          style={styles.cont}
          id="add"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_add_circle_outline.png')} /> }>
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute('add')}
          />
        </TabItem>

        <TabItem
          style={styles.cont}
          id="favorite"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_favorite_border.png')} /> }>
          <StackNavigation
            id="posts"
            initialRoute={Router.getRoute('favorite')}
          />
        </TabItem>

        <TabItem
          style={styles.cont}
          id="settings"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_settings.png')} /> }>
          <StackNavigation
            id="posts"
            initialRoute={Router.getRoute('settings')}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#B0F6E6'
  }
})
