import React from 'react'
import { View } from 'react-native'

import Title from '../../Title'
import RatedItem from './RatedItem'
import './index.styl'

const TopRated = () => {
  const items = [
    {
      image: '/assets/1.jpg'
    },
    {
      image: '/assets/2.jpg'
    },
    {
      image: '/assets/3.jpg'
    },
    {
      image: '/assets/4.jpg'
    }
  ]

  return pug`
    View.root
      Title Top rated products
      View.list
        each item, index in items
          RatedItem(key=index first=index===0 image=item.image)
  `
}

export default TopRated
