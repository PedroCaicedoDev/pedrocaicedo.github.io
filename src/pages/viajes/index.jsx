import { Breadcrumbs } from '../../components/breadCrumbs'
import { ContainerPages } from '../../components/container/container_pages'
import imgTravel from '../../assets/img/travel.svg'

export function Viajes() {
  return (
    <>
      <ContainerPages>
        <Breadcrumbs title={'Viajes'} />
        <img alt="" className="m-auto" src={imgTravel} />
      </ContainerPages>
    </>
  )
}
