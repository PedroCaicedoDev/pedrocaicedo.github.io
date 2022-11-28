import { dataMedium } from './dataMedium'
export function CardMedium() {
  return (
    <>
      {dataMedium.map((data) => (
        <a
          key={data.title}
          className="m-4 max-w-4xl sm:mx-auto flex flex-col md:flex-row items-center gap-8 p-4 rounded-xl bg-gray-100/90"
          href="https://pedrocaicedo.medium.com/c%C3%B3mo-dockerizar-un-proyecto-hecho-en-django-54dea316cbde"
          rel="noreferrer"
          target="_blank"
        >
          {/* <!-- Imagen --> */}
          <figure>
            <img
              alt={data.title}
              className="object-cover rounded-xl w-full md:w-auto md:max-w-sm drop-shadow-2xl"
              loading="lazy"
              src={data.img}
            />
          </figure>
          {/* <!-- Titulo, descripción y autor --> */}
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-black">{data.title}</h2>
            </div>
            <p className="my-4 text-gray-500">{data.description}</p>
            <div className="mb-2">
              <h4 className="text-sm text-black font-bold">{data.date}</h4>
            </div>
          </div>
        </a>
      ))}
    </>
  )
}
