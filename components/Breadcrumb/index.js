import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

const Breadcrumb = () => {
  return pug`
    View.root
      View.wrapper
        Text.title Shop
        View.navLinks
          TouchableOpacity
            Text.navLink Home
          Text.navLink.divider  / 
          TouchableOpacity
            Text.navLink.focused Shop
      
  `
}

export default Breadcrumb
