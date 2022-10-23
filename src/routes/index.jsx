import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { Viajes } from '../pages/viajes'
import { Deporte } from '../pages/deporte'
import { Programacion } from '../pages/programacion'
import { Recomendacion } from '../pages/recomendacion'
import { CuoponReferred } from '../pages/cuopon'

function AppRoute() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Viajes />} path="/viajes" />
        <Route element={<Deporte />} path="/deporte" />
        <Route element={<Programacion />} path="/programacion" />
        <Route element={<Recomendacion />} path="/recomendacion" />
        <Route element={<CuoponReferred />} path="/cupon-referidos" />
      </Routes>
    </>
  )
}
export default AppRoute
