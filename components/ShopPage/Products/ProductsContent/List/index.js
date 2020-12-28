import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import ListItem from './ListItem'
import './index.styl'

const List = ({ products }) => {
  return pug`
    View.wrapper
      each product, index in products
        ListItem(key=index data=product)
  `
}

export default List
