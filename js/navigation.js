import {
  NavigationProvider,
  StackNavigation
} from '@expo/ex-navigation'
import React, { Component } from 'react'
import Router from './router'


export default class Navigation extends Component {
  render () {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('main')} />
      </NavigationProvider>
    )
  }
}
