import React from 'react'
import { ScrollView, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'

import Header from 'components/Header'
import Breadcrumb from 'components/Breadcrumb'
import ShopPage from 'components/ShopPage'
import Footer from 'components/Footer'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      View.container
        Header
        Breadcrumb
        ShopPage
        Footer
  `
})
