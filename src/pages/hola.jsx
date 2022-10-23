import Header from '../components/header'
import Travel from '../assets/travel.svg'
export function Hola(props) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <img alt="" className="w-2/5" src={Travel} />
        <h1 className="text-6xl mt-10">{props.title}</h1>
      </div>
    </>
  )
}
