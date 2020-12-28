import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'
import Selector from './Selector'
import Filter from './Filter'

const ProductsBar = ({ onPress, listView }) => {
  const base = BASE_URL

  return pug`
    View.root
      Selector
      Filter(onPress=onPress listView=listView)
  `
}

export default ProductsBar
