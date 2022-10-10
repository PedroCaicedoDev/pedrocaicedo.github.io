import ImgLogo from '/src/assets/logoCaicedo.svg'
function Header() {
  return (
    <>
      <header
        className="py-4 pl-4 sticky top-0 w-full backdrop-blur
      bg-gray-600/90"
      >
        <div className="flex flex-shrink-0 items-center border-slate-900/10">
          <img alt="Your Company" className="block h-5 sm:h-6 md:h-7 w-auto" src={ImgLogo} />
        </div>
      </header>
    </>
  )
}
export default Header
