import React from 'react'
import { View } from 'react-native'

import './index.styl'
import Star from './Star'

const Stars = ({ color, stars }) => {
  const ratings = new Array(5).fill(1)

  return pug`
    View.root
      each rating, index in ratings
        Star(key=index red=index<stars first=index===0)
  `
}

export default Stars
