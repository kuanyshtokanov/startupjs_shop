import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import './index.styl'
import Button from '../../../../../Button'

const GridItem = ({ data }) => {

  const onPress = () => {
    console.log('add to favourites')
  }

  return pug`
    View.wrapper
      View.left
        View.imgWrap
          Image.img(source={uri:data.uri})
      View.right
        Text.title #{data.title}
        Text.price $ #{data.price}
        Text.description #{data.description}
        View.btns
          Button.btn(title='ADD TO CART' onPress=onPress)
          View.wishList
            
  `
}

export default GridItem
