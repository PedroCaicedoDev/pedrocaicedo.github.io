export function Hero(props) {
  return (
    <>
      <div className="text-center">
        <p className="text-md tracking-wider my-3 dark:text-slate-200">{props.username}</p>
        <h1 className="text-2xl font-bold tracking-tight text-[#1E1E1E] dark:text-slate-100">
          <span className="block xl:inline">
            {props.present} {props.name}
          </span>
        </h1>
        <p className="text-justify mt-3 mb-4 text-base text-[#1E1E1E]/90 dark:text-slate-200">
          {props.description}
        </p>
      </div>
    </>
  )
}
