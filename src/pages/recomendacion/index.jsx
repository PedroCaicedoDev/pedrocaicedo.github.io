import Iframe from 'react-iframe'

import { ContainerPages } from '../../components/container/container_pages'
import { Breadcrumbs } from '../../components/breadCrumbs'
export function Recomendacion() {
  return (
    <>
      <ContainerPages>
        <Breadcrumbs title={'Recomendación'} />4{' '}
        <div className="max-w-lg mx-auto mt-8 flex flex-wrap gap-4">
          <div className="bg-white/10 p-4 rounded-lg shadow hover:shadow-xl transition-all w-full ">
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-apple_green uppercase font-semibold text-xs">podCast</span>
              <a className="text-2xl text-white font-semibold hover:underline" href="#">
                Calming Anxiety
              </a>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac aliquam ligula. Sed
                et massa pulvinar, interdum leo id, maximus lorem. Donec aliquet auctor turpis ut
                aliquet. Donec accumsan eu ipsum a vehicula.
              </p>
              <Iframe
                height=""
                styles={{ height: '80px' }}
                url="https://open.spotify.com/embed/show/2BLdPSFfzWaYKiXYV0Nqvo?utm_source=generator"
                width="100%"
              />
            </div>
          </div>
          <Iframe
            height="100%"
            styles={{ height: '80px' }}
            url="https://open.spotify.com/embed/show/2PjounY6ksV1eH60lY2jn8?utm_source=generator"
            width="50%"
          />
          <Iframe
            height="100%"
            styles={{ height: '80px' }}
            url="https://open.spotify.com/embed/show/0sGGLIDnnijRPLef7InllD?utm_source=generator"
            width="50%"
          />
        </div>
      </ContainerPages>
    </>
  )
}
