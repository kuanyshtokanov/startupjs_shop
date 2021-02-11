import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'

const Breadcrumb = () => {
  const base = BASE_URL
  const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: '100%',
      height: '100%'
    }
  })
  return pug`
    ImageBackground(source={uri: base+'/assets/breadcrumb.jpg'} style=styles.backgroundContainer)
      View.root
        View.wrapper
          Text.title Shop
          View.navLinks
            TouchableOpacity
              Text.navLink Home
            Text.navLink.divider  / 
            TouchableOpacity
              Text.navLink.focused Shop
      
  `
}

export default Breadcrumb
