import { dataReferredSection } from './dataReferredSection'
export function ReferredSection() {
  return (
    <>
      <article className="flex items-center flex-col gap-3">
        {dataReferredSection.map((referred) => (
          <a
            key={referred.title}
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl
            hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            href={referred.url}
          >
            <img
              alt={referred.title}
              className="object-scale-down p-4 w-full h-96 rounded-t-lg md:h-auto md:w-40 md:pl-2 sm:rounded-none md:rounded-l-lg"
              src={referred.imgUrl}
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-4/5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {referred.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {referred.description}
              </p>
            </div>
          </a>
        ))}
      </article>
    </>
  )
}
