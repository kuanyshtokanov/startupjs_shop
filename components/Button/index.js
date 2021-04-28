import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import './index.styl'

const Button = ({ children, onPress, title, info, action }) => {
  return pug`
    TouchableOpacity(onPress=onPress)
      View.btn(styleName={ info, action })
        Text.txt #{title}
  `
}

export default Button
