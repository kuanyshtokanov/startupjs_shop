import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'

import Section from '../Section'
import Button from '../Button'
import Link from '../Link'
import SocialInfo from '../SocialInfo'
import Logo from '../Logo'
import MenuItem from '../MenuItem'
import ContactInfo from '../ContactInfo'

const Footer = () => {
  const handleClick = () => {
    console.log('Learn More pressed')
  }

  const menus = [
    'HOME',
    'ABOUT US',
    'SHOP',
    'PAGES',
    'BLOG',
  ]

  return pug`
    View.footer
      View.container
        View.first
          Text.txt 20 years experience
          SocialInfo
        View.second
          Logo
          View.menu
            each item, index in menus
              MenuItem(key=index last=index===menus.length-1) #{item}
          View.line
          View.copyright
            Text.txt Copyright © neha 2018. All Right Reserved.
        View.third
          ContactInfo
  `
}

export default Footer
