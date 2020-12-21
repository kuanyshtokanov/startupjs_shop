import React from 'react'
import { observer } from 'startupjs'
import { ScrollView, View } from 'react-native'
import { TestComponent } from 'components'
import './index.styl'
import { Content } from '@startupjs/ui'

import Header from '../../../components/Header'
import Breadcrumb from '../../../components/Breadcrumb'
import Main from '../../../components/Main'
import Footer from '../../../components/Footer'

export default observer(function PHome() {
  return pug`
    ScrollView.root
      View.container
        Header
        Breadcrumb
  `
})
