//import { BiWorld } from 'react-icons/bi'
import { BsFillHandThumbsUpFill, BsGithub, BsMedium } from 'react-icons/bs'
//import { GrMedium } from 'react-icons/gr'
import { AiOutlineCode } from 'react-icons/ai'
import { GiSoccerKick } from 'react-icons/gi'
import { FaPlane } from 'react-icons/fa'
import { RiCoupon2Fill } from 'react-icons/ri'
import { SiBuymeacoffee } from 'react-icons/si'
/* import { useTranslation } from 'react-i18next'
const { t, i18n } = useTranslation()

const handleLanguageLng = (lng) => {
  i18n.changeLanguage(lng)

  localStorage.setItem('lng', lng)
} */

export const person = {
  name: 'Pedro',
  username: '@pedro.caicedo.dev',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  imageSrc: 'https://secure.gravatar.com/avatar/8b801a2544619e18ec571facb3f03029?size=500',
  imageAlt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  logo: '',
  logoAlt: 'logo de la brand',
  link: [
    {
      iconImg: <AiOutlineCode className="mr-2 w-5 h-5" />,
      titleName: 'Programación',
      href: '/programacion',
      type: 'btn-green',
      target: '',
    },
    {
      iconImg: <GiSoccerKick className="mr-2 w-5 h-5" />,
      titleName: 'Deporte',
      href: '/deporte',
      type: 'btn-green',
      target: '',
    },
    {
      iconImg: <FaPlane className="mr-2 w-5 h-5" />,
      titleName: 'Viajes',
      href: '/viajes',
      type: 'btn-green',
      target: '',
    },
  ],
  others: [
    {
      iconImg: <BsMedium className="mr-2 w-5 h-5" />,
      titleName: 'Medium',
      href: 'https://pedrocaicedo.medium.com',
      type: 'btn-black-medium',
      target: '_blank',
      tag: 'a',
    },
    {
      iconImg: <BsGithub className="mr-2 w-5 h-5" />,
      titleName: 'Github',
      href: 'https://github.com/PedroCaicedoDev',
      type: 'btn-black',
      target: '_blank',
      tag: 'a',
    },
    {
      iconImg: <RiCoupon2Fill className="mr-2 w-5 h-5" />,
      titleName: 'Cupones o Referidos',
      href: '/cupon-referidos',
      type: 'btn-blue90',
      target: '',
    },
    {
      iconImg: <BsFillHandThumbsUpFill className="mr-2 w-5 h-5" />,
      titleName: 'Recomendaciones',
      href: '/recomendacion',
      type: 'btn-blue90',
      target: '',
    },
    {
      iconImg: <SiBuymeacoffee className="mr-2 w-5 h-5" />,
      titleName: 'Invítame a un café',
      href: 'https://www.buymeacoffee.com/caicedo.dev',
      type: 'btn-yellow',
      target: '_blank',
      tag: 'a',
    },
  ],
}
