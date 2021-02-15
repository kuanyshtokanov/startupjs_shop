import React from 'react'
import { View, Text } from 'react-native'

import './index.styl'

const Row = ({ first, title, children, last }) => {
  return pug`
    View.row(styleName={ first })
      Text.title #{title}
      Text.text #{children}
  `
}
export default Row
