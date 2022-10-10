export function H1(props) {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        <span className="block xl:inline">I am {props.name}</span>
      </h1>
    </>
  )
}
