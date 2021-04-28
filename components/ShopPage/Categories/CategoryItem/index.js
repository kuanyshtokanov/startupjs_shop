import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

const CategoryItem = ({ first, label, value }) => {
  return pug`
    View.listItem
      TouchableOpacity
        Text.item(styleName={first})=label
      TouchableOpacity
        Text.item(styleName={first})=value
  `
}

export default CategoryItem
