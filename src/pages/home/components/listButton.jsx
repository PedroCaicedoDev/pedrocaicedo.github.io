export function ListButton(props) {
  const buttonLink = props.person

  return (
    <>
      <div className="flex flex-col gap-5">
        {buttonLink.map((link) => {
          const btnColor = `btn ${link.type}`

          return (
            <a
              key={link.titleName}
              className={`${btnColor}`}
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.iconImg}
              {link.titleName}
            </a>
          )
        })}
      </div>
    </>
  )
}
