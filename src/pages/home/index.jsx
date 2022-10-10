import Header from '../../components/header'
import { H1 } from '../../components/heading'
import IconGithub from '../../components/icon/iconGithub'

import ImageHome from './components/image'

export function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto mt-5 max-w-lg px-4">
        <ImageHome alt={person.imageAlt} imageSrc={person.imageSrc} />
        <div className="text-center">
          <p className="text-md tracking-wider my-3">{person.username}</p>
          <H1 name={person.name} />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            <span className="block xl:inline">I am {person.name}</span>
          </h1>
          <p className="mt-3 mb-4 text-base text-gray-500">{person.description}</p>
          <div className="flex flex-col gap-5">
            {person.btn.map((btn) => (
              <a
                key={btn.titleName}
                className={`btn btn-${btn.type}`}
                href={btn.href}
                rel="noreferrer"
                target="_blank"
              >
                <IconGithub className="text-white" />
                {btn.titleName}
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
