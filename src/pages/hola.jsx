import { ContainerPages } from '../components/container/container_pages'
import Header from '../components/header'
import Travel from '../assets/travel.svg'
import { Breadcrumbs } from '../components/breadCrumbs'
export function Hola(props) {
  return (
    <>
      <Header />
      <ContainerPages>
        <div className="px-4 py-3 sm:flex justify-between dark:text-white bg-zinc-100/10">
          <h2 className="text-2xl sm:text-3xl font-semibold">{props.title}</h2>
          <Breadcrumbs />
        </div>

        <section className="mt-10 w-3/4 mx-auto">
          <ul
            className="flex text-md font-medium text-center
        text-black/70 border-b border-gray-200 dark:border-white/20 dark:text-gray-100/70"
          >
            <li className="mr-2 w-1/2">
              <a
                aria-current="page"
                className="w-full inline-block p-4 text-black bg-gray-100
                rounded-t-lg active dark:bg-white/20 dark:text-white"
                href="#"
              >
                Cupones
              </a>
            </li>
            <li className="mr-2 w-1/2">
              <a
                className="w-full inline-block p-4 rounded-t-lg hover:text-gray-600
                hover:bg-gray-50 dark:hover:bg-gray-500 dark:hover:text-gray-300"
                href="#"
              >
                Referidos
              </a>
            </li>
          </ul>
        </section>
      </ContainerPages>
      <div className="flex flex-col items-center mt-10">
        <img alt="" className="w-2/5" src={Travel} />
        <h1 className="text-6xl mt-10">{props.title}</h1>
      </div>
    </>
  )
}
