import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import './index.styl'
import GridItem from './GridItem'

const Grid = ({ products }) => {
  return pug`
    View.wrapper
      each product, index in products
        GridItem(data=product)
  `
}

export default Grid
