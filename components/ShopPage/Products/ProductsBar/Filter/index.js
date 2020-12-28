import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'
import './index.styl'

const ProductsSelector = ({ onPress, listView }) => {
  const base = BASE_URL
  const gridIcon = ['fas', 'th']
  const barsIcon = ['fas', 'bars']

  return pug`
    View.root
      TouchableOpacity(onPress=()=>onPress(false))
        FontAwesomeIcon.icon(icon=gridIcon size=20 color=(!listView ? '#ff4136' : '#6c6c6c'))
      TouchableOpacity(onPress=()=>onPress(true))
        FontAwesomeIcon.bars(icon=barsIcon size=20 color=(listView ? '#ff4136' : '#6c6c6c'))
  `
}

export default ProductsSelector
