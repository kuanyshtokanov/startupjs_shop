import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import './index.styl'

const WishList = () => {
  const [isFavorite, addToFavorite] = useState(false)

  const icon = ['fas', 'heart']

  const handleClick = () => {
    addToFavorite(!isFavorite)
  }

  return pug`
    TouchableOpacity(onPress=handleClick)
      View.btn
        FontAwesomeIcon.icon(styleName={ added:isFavorite } icon=icon size=20)
  `
}

export default WishList
