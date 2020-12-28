import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

const CategoryItem = ({ label, value }) => {
  return pug`
    View.listItem
      TouchableOpacity
        Text.item #{label}
      TouchableOpacity
        Text.item #{value}
  `
}

export default CategoryItem
