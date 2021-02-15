import React from 'react'
import { View } from 'react-native'

import ListItem from './ListItem'
import './index.styl'

const List = ({ products }) => {
  return pug`
    View.wrapper
      each product, index in products
        ListItem(key=index first=index===0 data=product)
  `
}

export default List
