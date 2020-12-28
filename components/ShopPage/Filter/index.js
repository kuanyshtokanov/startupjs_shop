import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import Title from '../../Title'
import './index.styl'

const Filter = () => {
  const base = BASE_URL

  const searchIcon = ['fas', 'search']

  return pug`
    View.wrapper
      Title Filter by Price
      View.slider
        Text.leftSlider
        Text.middleSlider
        Text.rightSlider
      View.prices
        View.price
          Text.priceLabel price : 
          TextInput.priceInput(value='$20 - $100')
        View
          Text.filter Filter
        
  `
}

export default Filter
