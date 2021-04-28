import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'

const GridItem = ({ first, data }) => {
  return pug`
    View(styleName={first}).wrapper
      View.imgWrapper
        Image.img(source={uri:BASE_URL+'/'+data.uri})
      View.info
        Text.title=data.title
        Text.price="$ "+data.price
      Text.category=data.category
  `
}

export default GridItem
