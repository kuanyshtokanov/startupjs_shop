import React from 'react'
import { View, Image, Text, TouchableOpacity, Linking, Alert } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'
import Stars from '../../../Stars'

const RatedItem = ({ first, image }) => {
  const title = 'Flying Drone'
  const stars = 2
  const price = '$140.00'

  const handleClick = async () => {
    const supported = await Linking.canOpenURL('#')

    if (supported) {
      await Linking.openURL('#')
    } else {
      Alert.alert(`Don't know how to open this URL: ${'#'}`)
    }
  }

  return pug`
    View(styleName={first}).list
      View.left
        TouchableOpacity(onPress=handleClick)
          Image.img(source={uri:BASE_URL+image})
      View.right
        Text.title=title
        Stars(stars=stars)
        Text.price=price
  `
}

export default RatedItem
