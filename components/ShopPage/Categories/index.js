import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import Title from '../../Title'
import CategoryItem from './CategoryItem'
import './index.styl'

const Categories = () => {
  const base = BASE_URL

  const items = [
    {
      label: 'Accessories',
      value: 4
    },
    {
      label: 'Book',
      value: 9
    },
    {
      label: 'Clothing',
      value: 5
    },
    {
      label: 'Homelife',
      value: 3
    },
    {
      label: 'Kids & Baby',
      value: 4
    },
  ]

  return pug`
    View.wrapper
      Title Categories
      View.list
        each item, index in items
          CategoryItem(key=index label=item.label value=item.value)
  `
}

export default Categories
