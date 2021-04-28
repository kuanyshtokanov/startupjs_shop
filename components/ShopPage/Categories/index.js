import React from 'react'
import { View } from 'react-native'

import Title from '../../Title'
import CategoryItem from './CategoryItem'
import { categories } from '../../../consts'
import './index.styl'

const Categories = () => {
  return pug`
    View.wrapper
      Title Categories
      View.list
        each item, index in categories
          CategoryItem(first=index===0 key=index label=item.label value=item.value)
  `
}

export default Categories
