import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faBars, faShoppingBag, faSearch, faTimes, faStar, faChevronDown, faTh, faHeart } from '@fortawesome/free-solid-svg-icons'

import * as pages from './pages'
import getRoutes from './routes'

library.add(
  faBars,
  faShoppingBag,
  faSearch,
  faTimes,
  faStar,
  faChevronDown,
  faTh,
  faHeart,
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
  faDribbble,
)

export { default as Layout } from './Layout'
export const routes = getRoutes(pages)
