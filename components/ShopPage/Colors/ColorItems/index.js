import React from 'react'
import { View } from 'react-native'
import './index.styl'

const CategoryItems = () => {
  return pug`
    View.list
      View.color.red
      View.color.pink
      View.color.blue
      View.color.sky
      View.color.green
      View.color.purple.last
  `
}

export default CategoryItems
