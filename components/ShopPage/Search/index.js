import React from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { BASE_URL } from '@env'

import Title from '../../Title'
import './index.styl'

const Search = () => {
  const base = BASE_URL

  const searchIcon = ['fas', 'search']

  return pug`
    View.wrapper
      Title Search Products
      View.search
        TextInput.searchInput(placeholder='Search Products...')
        View.searchIcon
          FontAwesomeIcon.icon(icon=searchIcon size=20 color='#ff4136')
  `
}

export default Search
