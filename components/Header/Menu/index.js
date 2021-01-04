import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

import MenuItem from '../../MenuItem'

const menus = [
  'HOME',
  'ABOUT US',
  'SHOP',
  'PAGES',
  'BLOG',
  'CONTACT'
]

const Header = () => {
  const base = BASE_URL

  return pug`
    View.menu
      each item, index in menus
        MenuItem(key=index) #{item}
  `
}

export default Header
