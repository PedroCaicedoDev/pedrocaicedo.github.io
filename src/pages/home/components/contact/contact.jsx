//import { AiOutlineMail } from 'react-icons/ai'

import imgLogo from '../../../../assets/logoPC.svg'

export function Contact() {
  return (
    <>
      <section
        className="flex items-center justify-center my-12
      text-[#1E1E1E] dark:text-slate-200 bg-[url('../../../../assets/trama.svg')]"
      >
        <img alt="" className="w-20" src={imgLogo} />
        <div className="ml-4 text-4xl font-semibold">
          <p>Pedro</p>
          <p>Caicedo</p>
        </div>
        {/*         <div className="text-sm text-center w-1/2">
          <AiOutlineMail className="text-6xl my-2 ml-6" />
          <p className="font-semibold">caicedo1089@gmail.com/</p>
          <p className="text-xs">(respuesta rápida y con preferencia)</p>
        </div> */}
      </section>
    </>
  )
}
