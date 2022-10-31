import { social } from './dataNetwork'

export function ListNetworkSocial() {
  return (
    <>
      <section className="text-black dark:text-slate-100 my-12 flex justify-around">
        {social.map((network) => (
          <a
            key={network.titleName}
            className="w-11 h-11 bg-gray-200/50 dark:bg-gray-100/10
              hover:text-gray-200 hover:bg-black/70
              flex justify-center items-center rounded-lg hover:bg-black
              hover:dark:bg-gray-200/50 hover:dark:text-black "
            href={network.href}
            rel="noreferrer"
            target="_blank"
          >
            {network.iconImg}
          </a>
        ))}
      </section>
    </>
  )
}
