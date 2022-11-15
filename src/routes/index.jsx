import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Home } from '../pages/home'
import { Viajes } from '../pages/viajes'
import { Deporte } from '../pages/deporte'
import { Programacion } from '../pages/programacion'
import { Recomendacion } from '../pages/recomendacion'
import { CuoponReferred } from '../pages/cuopon'
import Header from '../components/header'
import { Footer } from '../components/footer'

function AppRoute() {
  const { t, i18n } = useTranslation()
  const handleLanguageLng = (lng) => {
    i18n.changeLanguage(lng)

    localStorage.setItem('lng', lng)
  }

  return (
    <>
      <Header handle={handleLanguageLng} />
      <Routes>
        <Route element={<Viajes />} path="/viajes" />
        <Route element={<Deporte />} path="/deporte" />
        <Route element={<Programacion />} path="/programacion" />
        <Route element={<Recomendacion />} path="/recomendacion" />
        <Route element={<CuoponReferred />} path="/cupon-referidos" />
        <Route exact element={<Home />} path="/" />
      </Routes>
      <Footer t={t} />
    </>
  )
}
export default AppRoute
