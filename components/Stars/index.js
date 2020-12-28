import React from 'react'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import './index.styl'
import Star from './Star'

const Stars = ({ color, stars }) => {
  const starIcon = ['fa', 'star']
  const ratings = [1, 2, 3, 4, 5]

  return pug`
    View.root
      each rating, index in ratings
        Star(key=index red=index<stars first=index===0)
  `
}

export default Stars
