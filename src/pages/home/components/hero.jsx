export function Hero(props) {
  return (
    <>
      <div className="text-center">
        <p className="text-md tracking-wider my-3 dark:text-gray-200">{props.username}</p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-sky-500">
          <span className="block xl:inline">
            {props.present} {props.name}
          </span>
        </h1>
        <p className="mt-3 mb-4 text-base text-gray-500 dark:text-gray-400">{props.description}</p>
      </div>
    </>
  )
}
