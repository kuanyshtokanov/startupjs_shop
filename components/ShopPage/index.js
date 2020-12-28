import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

import Search from './Search'
import Filter from './Filter'
import Categories from './Categories'
import Colors from './Colors'
import Sizes from './Sizes'
import TopRated from './TopRated'
import Products from './Products'

const ShopPage = () => {
  const base = BASE_URL

  return pug`
    View.wrapper
      View.sidebar
        Search
        Filter
        Categories
        Colors
        Sizes
        TopRated
      View.products
        Products
  `
}

export default ShopPage
