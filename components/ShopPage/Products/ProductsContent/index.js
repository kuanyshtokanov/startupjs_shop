import React from 'react'
import { View } from 'react-native'

import './index.styl'
import Grid from './Grid'
import List from './List'

const ProductsContent = ({ listView }) => {
  const products = [
    {
      sale: true,
      uri: 'assets/products/1.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/2.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/3.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: true,
      uri: 'assets/products/4.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/5.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/6.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: true,
      uri: 'assets/products/7.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/8.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/9.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: true,
      uri: 'assets/products/10.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/11.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    },
    {
      sale: false,
      uri: 'assets/products/12.jpg',
      title: 'Wooden furniture',
      price: 110,
      category: 'Electronic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur'
    }
  ]

  return pug`
    View.cardsWrapper
      if listView
        List(products=products)
      else
        Grid(products=products)
  `
}

export default ProductsContent
