export function ListButton(props) {
  const buttonLink = props.person

  return (
    <>
      <div className="flex flex-col gap-4">
        {buttonLink.map((link) => {
          const btnColor = `btn ${link.type}`

          return (
            <a key={link.titleName} className={`${btnColor}`} href={link.href} target={link.target}>
              {link.iconImg}
              {link.titleName}
            </a>
          )
        })}
      </div>
    </>
  )
}
