import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import './index.styl'
import Button from '../../../../../Button'

const GridItem = ({ data }) => {

  const onPress = () => {
    console.log('add to favourites')
  }

  return pug`
    View.wrapper
      View.imgWrapper
        Image.img(source={uri:data.uri})
      View.info
        Text.title=data.title
        Text.price="$ "+data.price
      Text.category=data.category
  `
}

export default GridItem
