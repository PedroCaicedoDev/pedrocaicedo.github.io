import { useState } from 'react'

import { ContainerPages } from '../../components/container/container_pages'
import { Breadcrumbs } from '../../components/breadCrumbs'

import { CuoponSection } from './components/cuoponSection'
import { ReferredSection } from './components/referredSection'

export function CuoponReferred() {
  const [section, setSection] = useState('Cupones')
  const handleSection = (e) => {
    setSection(e.target.innerText)
  }

  return (
    <>
      <ContainerPages>
        <div className="px-4 py-3 sm:flex justify-between dark:text-white bg-zinc-100/10">
          <h2 className="text-2xl mb-2 sm:m-0 sm:text-3xl font-semibold">Cupones y referidos</h2>
          <Breadcrumbs />
        </div>

        <section className="mt-10 w-full px-3 max-w-4xl mx-auto">
          <ul
            className="flex gap-2 text-md font-medium text-center
        text-black/70 border-b border-gray-200 dark:border-white/60 dark:text-gray-100/70"
            onClick={handleSection}
          >
            <li className="w-1/2">
              {section === 'Referidos' ? (
                <a
                  aria-current="page"
                  className="w-full inline-block p-4 text-black bg-gray-100
                  rounded-t-lg active dark:bg-white/50 dark:text-white font-semibold"
                >
                  Referidos
                </a>
              ) : (
                <a
                  aria-current="page"
                  className="w-full inline-block p-4 text-black dark:bg-white/10
                  rounded-t-lg dark:text-white dark:hover:bg-gray-500"
                  href="#/cupon-referidos"
                >
                  Referidos
                </a>
              )}
            </li>
            <li className="w-1/2">
              {section === 'Cupones' ? (
                <a
                  aria-current="page"
                  className="w-full inline-block p-4 text-black bg-gray-100
                  rounded-t-lg active dark:bg-white/50 dark:text-white font-semibold "
                  href="#/cupon-referidos"
                >
                  Cupones
                </a>
              ) : (
                <a
                  aria-current="page"
                  className="w-full inline-block p-4 text-black dark:bg-white/10
                  rounded-t-lg dark:text-white dark:hover:bg-gray-500 "
                  href="#/cupon-referidos"
                >
                  Cupones
                </a>
              )}
            </li>
          </ul>
          <article className="bg-zinc-100/40 rounded-b-lg p-3">
            {section === 'Cupones' ? <CuoponSection /> : <ReferredSection />}
          </article>
        </section>
      </ContainerPages>
    </>
  )
}
