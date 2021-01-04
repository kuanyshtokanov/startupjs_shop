import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const MenuItem = ({ children, last }) => {
  const base = BASE_URL

  return pug`
    View.menuItem(styleName=[{last:last}])
      Text.txt #{children}
  `
}

export default MenuItem
