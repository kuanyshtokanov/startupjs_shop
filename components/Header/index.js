import React from 'react'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import './index.styl'

import Menu from './Menu'
import Logo from '../Logo'

const Header = () => {
  const items = [
    {
      iconSrc: ['fas', 'search']
    },
    {
      iconSrc: ['fas', 'shopping-bag']
    },
    {
      iconSrc: ['fas', 'bars']
    }
  ]

  return pug`
    View.root
      View.header
        Logo
        Menu
        View.navButtons
          each item, index in items
            View.icon(key=index styleName={first: index===0, burger: index>1})
              FontAwesomeIcon(icon=item.iconSrc size=20 color='rgba(0,0,0, 0.85)')

  `
}

export default Header
