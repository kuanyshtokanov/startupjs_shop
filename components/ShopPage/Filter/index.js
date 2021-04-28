import React from 'react'
import { View, Text, TextInput } from 'react-native'

import Title from '../../Title'
import './index.styl'

const Filter = () => {
  return pug`
    View.wrapper
      Title Filter by Price
      View.slider
        Text.leftSlider
        Text.middleSlider
        Text.rightSlider
      View.prices
        Text
          Text.priceLabel price : 
          TextInput.priceInput(value='$20 - $100')
        View
          Text.filter Filter
        
  `
}

export default Filter
