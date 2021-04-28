import React from 'react'
import { View, Text } from 'react-native'

import Title from 'components/Title'
import './index.styl'
import { sizes } from '../../../consts'

const Sizes = () => {
  return pug`
    View.wrapper
      Title size
      View.list
        each item, index in sizes
          Text(key=index styleName={first:index===0}).size=item.label
  `
}

export default Sizes
