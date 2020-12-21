import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingBag, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import * as pages from './pages'
import getRoutes from './routes'

library.add(
  faBars, faShoppingBag, faSearch, faTimes
)

export { default as Layout } from './Layout'
export const routes = getRoutes(pages)
