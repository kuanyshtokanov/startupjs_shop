import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'
import './index.styl'

const Title = ({ children }) => {
  return pug`
    Text.title #{children}
  `
}

export default Title
