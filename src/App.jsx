import './App.css'
import { useTranslation } from 'react-i18next'

import { Contact } from './pages/home/components/contact/contact'

//translation

import Header from './components/header'
import ImageHome from './pages/home/components/image'
import { ListButton } from './pages/home/components/listButton'
import { Hero } from './pages/home/components/hero'
import { Container } from './pages/home/components/container'
import { person } from './pages/home/components/dataPerson'
import { ListNetworkSocial } from './pages/home/components/networkSocial/listNetworkSocial'
import { Footer } from './components/footer'

export const App = () => {
  const { t, i18n } = useTranslation()
  const handleLanguageLng = (lng) => {
    i18n.changeLanguage(lng)

    localStorage.setItem('lng', lng)
  }

  return (
    <>
      <Header handle={handleLanguageLng} />
      <Container>
        <ImageHome alt={person.imageAlt} imageSrc={person.imageSrc} />
        <Hero
          description={`${t('description')}`}
          name={person.name}
          present={`${t('present')}`}
          username={person.username}
        />

        <ListButton person={person.link} />

        {/* Section Network Social */}
        <ListNetworkSocial />

        <ListButton person={person.others} />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}
