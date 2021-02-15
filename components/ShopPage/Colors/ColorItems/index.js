import React from 'react'
import { View } from 'react-native'

import './index.styl'

const CategoryItems = ({ red, pink, blue, sky, green, purple, last }) => {
  return pug`
    View(styleName={red, pink, blue, sky, green, purple, last}).color
  `
}

export default CategoryItems
