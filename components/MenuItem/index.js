import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import './index.styl'

const MenuItem = ({ children, last }) => {
  return pug`
    View.menuItem(styleName=[{last:last}])
      TouchableOpacity
        Text.txt #{children}
  `
}

export default MenuItem
