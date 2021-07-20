import { Page404 } from 'components/pages/Page404'
import { Profile } from 'components/pages/Profile'
import { Services } from 'components/pages/Services'
import { Social } from 'components/pages/Social'
import { Works } from 'components/pages/Works'

export const homeRoutes = [
  {
    path: '',
    exact: true,
    children: <Profile />,
  },
  {
    path: 'services',
    exact: false,
    children: <Services />,
  },
  {
    path: 'social',
    exact: false,
    children: <Social />,
  },
  {
    path: 'works',
    exact: false,
    children: <Works />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]
