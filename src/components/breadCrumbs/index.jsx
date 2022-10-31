import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Link } from 'react-router-dom'
import { SiHomeassistant } from 'react-icons/si'

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <>
      <div className="flex items-center">
        {breadcrumbs.map(({ breadcrumb }) => (
          <Link
            key={breadcrumb.key}
            className="text-black dark:text-zinc-100 text-sm flex flex-row"
            to={breadcrumb.key}
          >
            {breadcrumb.key === '/' ? (
              breadcrumb === 'Home' ? (
                <SiHomeassistant />
              ) : (
                <SiHomeassistant className="mr-2" />
              )
            ) : (
              ` | ${breadcrumb.props.children}`
            )}
          </Link>
        ))}
      </div>
    </>
  )
}
