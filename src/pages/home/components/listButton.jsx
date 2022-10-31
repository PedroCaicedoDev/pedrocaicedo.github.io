import { Link } from 'react-router-dom'
export function ListButton({ person, t }) {
  const buttonLink = person

  return (
    <>
      <div className="flex flex-col gap-4">
        {buttonLink.map((link, index) => {
          const btnColor = `btn ${link.type}`

          if (link.tag === 'a') {
            return (
              <a
                key={link.titleName}
                aria-label={link.titleName}
                className={`${btnColor}`}
                href={link.href}
                target={link.target}
              >
                {link.iconImg}
                {link.titleName}
              </a>
            )
          }

          return (
            <Link
              key={link.titleName}
              className={`${btnColor}`}
              target={link.target}
              to={link.href}
            >
              {link.iconImg}
              {t(`link_${index}`)}
            </Link>
          )
        })}
      </div>
    </>
  )
}
