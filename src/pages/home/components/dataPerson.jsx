import { BiWorld } from 'react-icons/bi'
import { BsStackOverflow, BsFillHandThumbsUpFill } from 'react-icons/bs'
import { GrMedium } from 'react-icons/gr'
import { AiOutlineCode } from 'react-icons/ai'
import { GiSoccerKick } from 'react-icons/gi'
import { FaPlane } from 'react-icons/fa'
import { RiCoupon2Fill } from 'react-icons/ri'
import { SiBuymeacoffee } from 'react-icons/si'

export const person = {
  name: 'Pedro Caicedo',
  username: '@PedroCaicedo',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  imageSrc: 'https://secure.gravatar.com/avatar/8b801a2544619e18ec571facb3f03029?size=500',
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
      titleName: 'Proyectos',
      href: '#',
      type: 'btn-green',
    },
    {
      iconImg: <GrMedium className="mr-2 w-5 h-5" />,
      titleName: 'Medium',
      href: 'https://pedrocaicedo.medium.com',
      type: 'btn-green80',
    },
    {
      iconImg: <BsStackOverflow className="mr-2 w-5 h-5" />,
      titleName: 'StackOverflow',
      href: 'https://stackoverflow.com/users/5948357/pedro-caicedo-dev',
      type: 'btn-green70',
    },
  ],
  others: [
    {
      iconImg: <AiOutlineCode className="mr-2 w-5 h-5" />,
      titleName: 'Programación',
      href: '/',
      type: 'btn-blue',
    },
    {
      iconImg: <GiSoccerKick className="mr-2 w-5 h-5" />,
      titleName: 'Deporte',
      href: '/',
      type: 'btn-blue80',
    },
    {
      iconImg: <FaPlane className="mr-2 w-5 h-5" />,
      titleName: 'Viajes',
      href: '/',
      type: 'btn-blue70',
    },
    {
      iconImg: <RiCoupon2Fill className="mr-2 w-5 h-5" />,
      titleName: 'Cupones o Referidos',
      href: '/',
      type: 'btn-blue60',
    },
    {
      iconImg: <BsFillHandThumbsUpFill className="mr-2 w-5 h-5" />,
      titleName: 'Recomendaciones',
      href: '/',
      type: 'btn-blue50',
    },
    {
      iconImg: <SiBuymeacoffee className="mr-2 w-5 h-5" />,
      titleName: 'Invítame a un café',
      href: '/',
      type: 'btn-green',
    },
  ],
}
