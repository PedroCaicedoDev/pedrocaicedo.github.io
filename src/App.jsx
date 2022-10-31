import './App.css'
import { HashRouter } from 'react-router-dom'

import AppRoute from './routes'

export const App = () => {
  return (
    <>
      <HashRouter>
        <AppRoute />
      </HashRouter>
    </>
  )
}
