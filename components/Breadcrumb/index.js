import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { BASE_URL } from '@env'

import './index.styl'

const Breadcrumb = () => {
  const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    imageStyle: {
      resizeMode: 'cover'
    }
  })
  return pug`
    ImageBackground(source={uri: BASE_URL+'/assets/breadcrumb.jpg'} style=styles.backgroundContainer imageStyle=styles.imageStyle)
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
