import React from 'react'
import { View, Image, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'
import './index.styl'

const ProductsSelector = () => {
  const base = BASE_URL
  const starIcon = ['fas', 'chevron-down']

  return pug`
    View.root
      Text.searchResults 
        Text.red=23
        Text=" Product Found of "
        Text.red=50
      View.sorting
        Text.sortLabel="Sort By : "
        View.sortSelect
          Text.sortValue="Default"
          FontAwesomeIcon.icon(icon=starIcon size=16)
  `
}

export default ProductsSelector
