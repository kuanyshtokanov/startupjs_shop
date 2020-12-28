import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import Title from '../../Title'
import ColorItems from './ColorItems'
import './index.styl'

const Colors = () => {
  return pug`
    View.wrapper
      Title Colors
      ColorItems
  `
}

export default Colors
