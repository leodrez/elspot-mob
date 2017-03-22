import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import React, { Component } from 'react'
import { Image } from 'react-native'
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
          id="home"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_home.png')} /> }>
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
          />
        </TabItem>

        <TabItem
          id="search"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_search.png')} /> }>
          <StackNavigation
            id="posts"
            initialRoute={Router.getRoute('search')}
          />
        </TabItem>

        <TabItem
          id="add"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_add.png')} /> }>
          <StackNavigation
            id="profile"
            initialRoute={Router.getRoute('add')}
          />
        </TabItem>

        <TabItem
          id="favorite"
          renderIcon={(isSelected) => <Image source={require('../assets/icons/ic_favorite.png')} /> }>
          <StackNavigation
            id="posts"
            initialRoute={Router.getRoute('favorite')}
          />
        </TabItem>

        <TabItem
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
