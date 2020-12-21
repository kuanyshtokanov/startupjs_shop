import React from 'react'
import { View, Text } from 'react-native'
import './index.styl'

import Section from '../Section'
import Button from '../Button'
import Link from '../Link'

const Footer = () => {
  const handleClick = () => {
    console.log('Learn More pressed')
  }

  return pug`
    View.footer
      View.container
        Section
          Text.title Aliquam sed mauris
          Text.txt Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
          Button(title='Learn more' onPress=handleClick info)
        Section
          Text.title Etiam feugiat
          View.copyright
            Text.copyright © Untitled. Design: 
              Link(url='https://twitter.com/ajlkn')
                Text HTML5 UP. 
              Text Demo Images: 
              Link(url='https://twitter.com/ajlkn')
                Text Unsplash.
  `
}

export default Footer