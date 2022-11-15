import { ContainerPages } from '../components/container/container_pages'
import Travel from '../assets/travel.svg'
import { Breadcrumbs } from '../components/breadCrumbs'
export function Hola(props) {
  return (
    <>
      <ContainerPages>
        <div className="px-4 py-3 sm:flex justify-between dark:text-white bg-zinc-100/10">
          <h2 className="text-2xl sm:text-3xl font-semibold">{props.title}</h2>
          <Breadcrumbs />
        </div>
      </ContainerPages>
      <div className="flex flex-col items-center mt-10">
        <img alt="" className="w-2/5" src={Travel} />
        <h1 className="text-6xl mt-10 dark:text-white">{props.title}</h1>
      </div>
    </>
  )
}
