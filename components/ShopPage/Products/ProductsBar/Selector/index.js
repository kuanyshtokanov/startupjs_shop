import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import './index.styl'

const ProductsSelector = () => {
  const starIcon = ['fas', 'chevron-down']

  return pug`
    View.root
      View.searchResults
        Text
          Text.red 23
          Text.txt  Product Found of 
          Text.red 50
      View.sorting
        Text.sortLabel Sort By : 
        View.sortSelect
          Text.sortValue Default
          FontAwesomeIcon.icon(icon=starIcon size=16)
  `
}

export default ProductsSelector
