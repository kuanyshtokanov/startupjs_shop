import React from 'react'
import { View } from 'react-native'

import Title from '../../Title'
import ColorItems from './ColorItems'
import { colors } from '../../../consts'
import './index.styl'

const Colors = () => {
  return pug`
    View.wrapper
      Title Colors
      View.list
        each item, index in colors
          ColorItems(key=index
            last=index===colors.length-1
            red=item.color==='red'
            pink=item.color==='pink'
            blue=item.color==='blue'
            sky=item.color==='sky'
            green=item.color==='green'
            purple=item.color==='purple'
          )
  `
}

export default Colors
