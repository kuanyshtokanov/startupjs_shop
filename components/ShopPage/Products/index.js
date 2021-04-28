import React, { useState } from 'react'
import { View } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

import ProductsBar from './ProductsBar'
import ProductsContent from './ProductsContent'

const Products = () => {
  const [listView, setListView] = useState(true)

  const changeView = (val) => {
    setListView(val)
  }

  const base = BASE_URL

  return pug`
    View.wrapper
      ProductsBar(onPress=changeView listView=listView)
      ProductsContent(listView=listView)
  `
}

export default Products
