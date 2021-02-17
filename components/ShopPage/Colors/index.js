import React from 'react'
import { View } from 'react-native'

import Title from '../../Title'
import { colors } from '../../../consts'
import './index.styl'

const Colors = () => {
  return pug`
    View.wrapper
      Title Colors
      View.list
        each item, index in colors
          View.color(
            styleName={first:index===0}
            key=index
            style={backgroundColor:item}
          )
  `
}

export default Colors
