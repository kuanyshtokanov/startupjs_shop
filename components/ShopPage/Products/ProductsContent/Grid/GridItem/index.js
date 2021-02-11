import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'

const GridItem = ({ data }) => {
  const base = BASE_URL

  return pug`
    View.wrapper
      View.imgWrapper
        Image.img(source={uri:base+'/'+data.uri})
      View.info
        Text.title=data.title
        Text.price="$ "+data.price
      Text.category=data.category
  `
}

export default GridItem
