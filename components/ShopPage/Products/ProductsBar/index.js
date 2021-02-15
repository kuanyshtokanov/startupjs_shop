import React from 'react'
import { View } from 'react-native'

import './index.styl'
import Selector from './Selector'
import Filter from './Filter'

const ProductsBar = ({ onPress, listView }) => {
  return pug`
    View.root
      Selector
      Filter(onPress=onPress listView=listView)
  `
}

export default ProductsBar
