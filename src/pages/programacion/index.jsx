import { ContainerPages } from '../../components/container/container_pages'
//import { Breadcrumbs } from '../../components/breadCrumbs'
export function Programacion() {
  return (
    <>
      <ContainerPages>
        <div className="bg-white max-w-3xl mx-auto py-4 px-6 rounded-lg shadow-xl">
          <div className="mb-3 flex">
            <div className="flex flex-col gap-2 mb-4">
              <a className="text-xl text-gray-700 font-bold hover:underline" href="#">
                Middle Seat x John Fetterman: Flipping a U.S. Senate Seat from Red to Blue
              </a>
              <p className="text-gray-600">
                How Early and Sustained Investments in Digital Propelled Fetterman to Victory
              </p>
            </div>
            <img
              alt=""
              className="w-[200px] h-[134px]"
              src="https://miro.medium.com/fit/c/250/168/1*EMt2IAfJBlS2ca1XoBpaTA.png"
            />
          </div>
          <div className="flex items-center justify-between">
            <a
              className="text-black font-semibold hover:text-apple_green transition-colors"
              href="#"
            >
              Leer más
            </a>
            <p className="text-gray-500 uppercase text-sm">19 sep, 2022</p>
          </div>
        </div>
      </ContainerPages>
    </>
  )
}
