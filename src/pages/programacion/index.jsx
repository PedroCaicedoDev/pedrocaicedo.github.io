import { ContainerPages } from '../../components/container/container_pages'
import { Breadcrumbs } from '../../components/breadCrumbs'

import { CardMedium } from './components/card/cardMedium'
export function Programacion() {
  return (
    <>
      <ContainerPages>
        <Breadcrumbs title={'Programación'} />
        <CardMedium />
      </ContainerPages>
    </>
  )
}
