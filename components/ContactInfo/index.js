import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'

import Row from '../Row'
import Link from '../Link'

const ContactInfo = () => {
  return pug`
    View.container
      Row(title='Phone :')
        Text.txt +012 345 678 102
      Row(title='Email :')
        Link(url='#')
          Text.link info@example.com
      Row(title='Address :' last)
        Text.txt Dhaka Bangladesh
  `
}

export default ContactInfo
