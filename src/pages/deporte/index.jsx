import { Breadcrumbs } from '../../components/breadCrumbs'
import { ContainerPages } from '../../components/container/container_pages'
import imgSport from '../../assets/img/goal.svg'
export function Deporte() {
  return (
    <>
      <ContainerPages>
        <Breadcrumbs title={'Deporte'} />
        <img alt="" className="m-auto w-4/5" src={imgSport} />
      </ContainerPages>
    </>
  )
}
