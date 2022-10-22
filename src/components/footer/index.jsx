import imgLogo from '../../assets/JC.png'

export function Footer() {
  return (
    <footer
      className="bg-gray-700/20 dark:bg-slate-700 w-full px-6 h-14
      flex flex-row justify-between items-center transition-all duration-700"
    >
      <p className="text-xs dark:text-slate-100 w-4/5">
        © 2022
        <a
          className="text-slate-800 dark:text-sky-500
          mx-2 font-semibold"
          href="#"
        >
          JCaicedo
        </a>
        building Software with ♥ from Colombia to the world.
      </p>
      <img alt="imagen logo" className="h-5" src={imgLogo} />
    </footer>
  )
}
