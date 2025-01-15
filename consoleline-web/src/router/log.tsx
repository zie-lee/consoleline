import AsyncComponent from './AsyncComponent'
import { lazy } from 'react'

export default [
  {
    path: '/log/detail',
    name: 'logDetail',
    element: AsyncComponent(lazy(() => import('../pages/log/detail')))
  },
]