import React from 'react'
import { View } from 'react-native'

import './index.styl'
import GridItem from './GridItem'

const Grid = ({ products }) => {
  return pug`
    View.wrapper
      each product, index in products
        GridItem(key=index first=index===0 data=product)
  `
}

export default Grid
