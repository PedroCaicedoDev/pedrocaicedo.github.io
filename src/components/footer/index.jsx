import imgLogo from '../../assets/logoCaicedo1.svg'

export function Footer() {
  return (
    <footer
      className="bg-gray-700/20 dark:bg-black/70 w-full px-6 h-14
      flex flex-col justify-center items-center transition-all duration-700"
    >
      <p className="text-xs dark:text-slate-100">
        Building Software with ♥ from LATAM to the world.
      </p>
      <a className="flex items-center font-base text-xs dark:text-slate-100" href="/">
        by
        <img alt="imagen logo" className="h-4 ml-1" src={imgLogo} />
      </a>
    </footer>
  )
}
