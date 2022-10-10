import './App.css'
import { BsGithub, BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'

import Header from './components/header'
import ImageHome from './pages/home/components/image'
import { ListButton } from './pages/home/components/listButton'
import { Hero } from './pages/home/components/hero'
import { Container } from './pages/home/components/container'

export const App = () => {
  const person = {
    name: 'Jose Caicedo',
    username: '@jcaicedo',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    imageSrc: './src/assets/foto_person.jpeg',
    imageAlt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    logo: 'https://moure.dev/wp-content/uploads/2021/08/mouredev_logo.png',
    logoAlt: 'logo de la brand',
    networkSocial: [
      {
        title: 'instagram',
        href: 'https://twitter.com/mouredev',
      },
      {
        title: 'twitter',
        href: 'https://twitter.com/mouredev',
      },
    ],
    link: [
      {
        iconImg: <BiWorld className="mr-2 w-5 h-5" />,
        titleName: 'Mi sitio web',
        href: '#',
        type: 'btn-primary',
      },
      {
        iconImg: <BsReverseLayoutTextSidebarReverse className="mr-2 w-5 h-5" />,
        titleName: 'Curriculum',
        href: '#',
        type: 'btn-secondary',
      },
      {
        iconImg: <BsGithub className="mr-2 w-5 h-5" />,
        titleName: 'GitHub',
        href: 'https://vitejs.dev/guide/static-deploy.html',
        type: 'btn-third',
      },
    ],
  }

  return (
    <>
      <Header />
      <Container>
        <ImageHome alt={person.imageAlt} imageSrc={person.imageSrc} />
        <Hero description={person.description} name={person.name} username={person.username} />
        <ListButton person={person.link} />
      </Container>
    </>
  )
}
