import React from 'react'
import { Text } from 'react-native'
import './index.styl'

const Logo = () => {
  return pug`
    Text
      Text.logoFirst n
      Text.logoSecond eha
        Text.logoDot .
  `
}

export default Logo
