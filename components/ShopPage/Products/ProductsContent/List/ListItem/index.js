import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'
import Button from '../../../../../Button'
import WishList from './WishList'

const List = ({ data }) => {
  const base = BASE_URL

  const onPress = () => {
    console.log('add to favourites')
  }

  return pug`
    View.wrapper
      View.left
        View.imgWrapper
          Image.img(source={uri:base+'/'+data.uri})
      View.right
        Text.title=data.title
        Text.price="$ "+data.price
        Text.description=data.description
        View.btns
          Button.btn(title='ADD TO CART' onPress=onPress)
          View.wishList
            WishList
  `
}

export default List
