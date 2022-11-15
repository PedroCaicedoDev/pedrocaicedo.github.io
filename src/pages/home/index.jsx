import { useTranslation } from 'react-i18next'

import { ListButton } from '../home/components/listButton'

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
      <Container>
        <ImageHome alt={person.imageAlt} imageSrc={person.imageSrc} />
        <Hero
          description={`${t('description')}`}
          name={person.name}
          present={`${t('present')}`}
          username={person.username}
        />

        <ListButton person={person.link} t={t} />

        {/* Section Network Social */}
        <ListNetworkSocial />

        <ListButton person={person.others} t={t} tag={person.others} />
        <Contact />
      </Container>
    </>
  )
}
