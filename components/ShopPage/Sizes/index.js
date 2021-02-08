import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import Title from '../../Title'
// import ColorItems from './ColorItems'
import './index.styl'

const Sizes = () => {
  return pug`
    View.wrapper
      Title size
      View.list
        Text.size="xl"
        Text.size="m"
        Text.size="l"
        Text.size="ml"
        Text.size.last="lm"
  `
}

export default Sizes
