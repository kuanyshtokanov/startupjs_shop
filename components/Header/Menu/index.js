import React from 'react'
import { View } from 'react-native'

import MenuItem from '../../MenuItem'
import './index.styl'

const menus = [
  'HOME',
  'ABOUT US',
  'SHOP',
  'PAGES',
  'BLOG',
  'CONTACT'
]

const Header = () => {
  return pug`
    View.menu
      each item, index in menus
        MenuItem(key=index) #{item}
  `
}

export default Header
