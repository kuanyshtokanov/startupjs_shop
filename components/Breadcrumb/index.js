import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

import Link from '../Link'

const Breadcrumb = () => {
  const base = BASE_URL

  return pug`
    View.root
      View.wrapper
        Text.title Shop
        View.navLinks
          Text.navLink Home
          Text.navLink.divider  / 
          Text.navLink.focused Shop
      
  `
}

export default Breadcrumb
