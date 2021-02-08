import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'
import Stars from '../../../Stars'

const RatedItem = ({ image }) => {
  const base = BASE_URL
  const title = 'Flying Drone'
  const stars = 2
  const price = '$140.00'

  const handleClick = async () => {
    const supported = await Linking.canOpenURL('#');

    if (supported) {
      await Linking.openURL('#');
    } else {
      Alert.alert(`Don't know how to open this URL: ${'#'}`);
    }
  }

  return pug`
    View.list
      View.left
        TouchableOpacity(onPress=handleClick)
          Image.img(source={uri:base+image})
      View.right
        Text.title=title
        Stars(stars=2)
        Text.price=price
  `
}

export default RatedItem
