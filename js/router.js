import { createRouter } from '@expo/ex-navigation'
import Home from './tabs/home'
import Favorite from './tabs/favorite'
import Add from './tabs/add'
import Search from './tabs/search'
import Settings from './tabs/settings'
import Spot from './spot'
import Tab from './tab'

/**
* Define you views here as a map, where the key is
the name you are assigning to the view and the component is the
actual view to be injected
*/
export default createRouter(() => ({
  main: () => Tab,
  home: () => Home,
  favorite: () => Favorite,
  add: () => Add,
  search: () => Search,
  settings: () => Settings,
  spot: () => Spot,
  header: () => Header
}))
