import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import './index.styl'

const MenuItem = ({ children, first }) => {
  return pug`
    View.menuItem(styleName={first})
      TouchableOpacity
        Text.txt #{children}
  `
}

export default MenuItem
