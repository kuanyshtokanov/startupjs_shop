import React from 'react'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import './index.styl'

const Stars = ({ stars, first, red, white }) => {
  const starIcon = ['fas', 'star']

  return pug`
    View.iconRoot(styleName=[{first}])
      FontAwesomeIcon.icon(styleName=[{red, white}] icon=starIcon size=12)
  `
}

export default Stars
