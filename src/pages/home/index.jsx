import { useTranslation } from 'react-i18next'

import Header from '../../components/header'
import { ListButton } from '../home/components/listButton'
import { Footer } from '../../components/footer'

import ImageHome from './components/image'
import { Hero } from './components/hero'
import { Container } from './components/container'
import { person } from './components/dataPerson'
import { ListNetworkSocial } from './components/networkSocial/listNetworkSocial'
import { Contact } from './components/contact/contact'

export function Home() {
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
