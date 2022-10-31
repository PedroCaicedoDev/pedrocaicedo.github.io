export function ReferredSection() {
  return (
    <>
      <article className="flex flex-col gap-3">
        <div className="flex items-center rounded-md bg-black/30 p-2">
          <img
            alt=""
            className="w-32"
            src="https://static.platzi.com/media/platzi-isotipo@2x.png"
          />
          <div className="ml-4">
            <p className="mb-1 text-lg font-semibold text-white">Platzi</p>
            <p className="text-sm text-white/80">
              La accesibilidad es necesaria para permitir que cualquier persona independientemente
              de sus capacidades pueda acceder a la informacion.
            </p>
            <div className="flex flex-col">
              <a
                className="mb-2 underline
              text-apple_green text-sm hover:text-apple_green/80"
                href="https://platzi.com/r/jose.caicedo.dev"
              >
                https://platzi.com/r/jose.caicedo.dev
              </a>
              <a
                className="bg-apple_green p-1 rounded-lg
                font-semibold w-20 hover:bg-white/50 hover:text-white
                text-center text-sm"
                href="https://platzi.com/r/jose.caicedo.dev"
                rel="noreferrer"
                target="_blank"
              >
                Ir a sitio
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-md bg-black/30 p-2">
          <img
            alt=""
            className="w-32"
            src="https://static.platzi.com/media/platzi-isotipo@2x.png"
          />
          <div className="ml-4">
            <p className="mb-1 text-lg font-semibold text-white">Platzi</p>
            <p className="text-sm text-white/80">
              La accesibilidad es necesaria para permitir que cualquier persona independientemente
              de sus capacidades pueda acceder a la informacion necesaria sin dificultades.
            </p>
            <div className="flex flex-col">
              <a
                className="mb-2 underline
              text-apple_green text-sm hover:text-apple_green/80"
                href="https://platzi.com/r/jose.caicedo.dev"
              >
                https://platzi.com/r/jose.caicedo.dev
              </a>
              <a
                className="bg-apple_green p-1 rounded-lg
                font-semibold w-20 hover:bg-white/50 hover:text-white
                text-center text-sm"
                href="https://platzi.com/r/jose.caicedo.dev"
                rel="noreferrer"
                target="_blank"
              >
                Ir a sitio
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
