import React from 'react'
import { View, Image, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'
import './index.styl'

import Link from '../Link'
import Menu from './Menu'

const Header = () => {
  const base = BASE_URL

  const items = [
    {
      iconSrc: ['fas', 'search'],
    },
    {
      iconSrc: ['fas', 'shopping-bag'],
    },
    {
      iconSrc: ['fas', 'bars'], //fas-times
    }
  ]

  return pug`
    View.root
      View.header
        View.logo
          Image.img(source={uri:base+'/assets/logo.png'})
        Menu
        View.navButtons
          each item, index in items
            View.icon(key=index styleName=[{first: index===0, burger: index>1}])
              FontAwesomeIcon(icon=item.iconSrc size=20 color='rgba(0,0,0, 0.85)')

  `
}

export default Header
