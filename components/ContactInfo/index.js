import React from 'react'
import { View, Text, Linking } from 'react-native'
import './index.styl'

import Row from '../Row'

const ContactInfo = () => {
  const sendEmail = () => {
    Linking.openURL('mailto:info@example.com')
  }

  return pug`
    View.container
      Row(first title='Phone :')
        Text.txt +012 345 678 102
      Row(title='Email :')
        View.link
          Text(onPress=sendEmail).linkTxt info@example.com
      Row(title='Address :')
        Text.txt Dhaka Bangladesh
  `
}

export default ContactInfo
