import { social } from './dataNetwork'

export function ListNetworkSocial() {
  return (
    <>
      <section className="text-[#1E1E1E] dark:text-slate-100 my-12 flex justify-around">
        {social.map((network) => (
          <a
            key={network.titleName}
            className="w-11 h-11 bg-gray-200/50 dark:bg-gray-100/10
              flex justify-center items-center rounded-lg hover:bg-gray-200
              hover:dark:bg-slate-700 "
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
