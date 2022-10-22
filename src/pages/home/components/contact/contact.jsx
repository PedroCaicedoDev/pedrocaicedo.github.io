import { AiOutlineMail } from 'react-icons/ai'

import imgLogo from '../../../../assets/JC.png'

export function Contact() {
  return (
    <>
      <section
        className="flex items-center justify-around my-10
      text-slate-800 dark:text-slate-200"
      >
        <img alt="" className="w-20 h-20" src={imgLogo} />
        <div className="text-sm text-center w-1/2">
          <AiOutlineMail className="text-6xl my-2 ml-6" />
          <p className="font-semibold">hola@HOLA.COM/</p>
          <p className="text-xs">(respuesta rápida y con preferencia)</p>
        </div>
      </section>
    </>
  )
}
