import Image from 'next/image'
import type { GetStaticPropsContext } from 'next'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { Text } from '@components/ui'

const links = [
  {
    domain: 'https://resinmods.com/',
    icon: 'resinmods',
    social: 'ResinMods',
    text: 'Shop ResinMods.com',
  },
  // {
  //   domain: 'https://etsy.com/resinmods',
  //   icon: 'etsy',
  //   social: 'etsy',
  //   text: 'Etsy Store',
  // },
  {
    domain: 'https://instagram.com/resinmods',
    icon: 'instagram',
    social: 'Instagram',
    text: 'Follow on Instagram',
  },
  {
    domain: 'https://twitter.com/resinmods',
    icon: 'twitter',
    social: 'Twitter',
    text: 'Follow on Twitter',
  },
  // { domain: '', icon: '', social: '', text: '' },
]

// TODO: Get static props
//

export default function Links() {
  return (
    <div
      className="flex text-white justify-center min-h-screen flex-col px-3 sm:px-0"
      style={{
        background: `linear-gradient(45deg, #141E30 0%, #243B55)`,
      }}
    >
      <div className="w-full md:w-4/5 lg:w-3/6 mx-auto mb-5">
        <div className="flex justify-center w-full">
          <Image
            src="/assets/images/linkslogo.png"
            alt="ResinMods logo"
            width={250}
            height={250}
          />
        </div>
        <h1 className="relative justify-center font-bold py-4 w-100 block text-center pl-12 md:px-12">
          ResinMods
        </h1>
        <div className="flex flex-col">
          <p className="flex justify-center">
            Handmade Gameboy Buttons & Shells
          </p>
          <p className="flex justify-center">🕹 Modded Consoles</p>
        </div>
      </div>
      {/* TODO: Add Newest / Popular items for sale in small circle and or box */}
      {/* <h1 className="text-center text-lg font-extrabold">Newest Items:</h1> */}
      {/* <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto pt-5 pb-5 flex justify-evenly">
    <li>
      
        className="h-36 w-36 rounded-full "
        src={
          'https://cdn.shopify.com/s/files/1/0622/4225/9192/products/IMG_1076_1646x.jpg?v=1643447584'
        }
        alt=""
      />

      <p className="text-md w-36 truncate text-center">Item Name?</p>
    </li>
    <li>
      
        className="h-36 w-36 rounded-full "
        src={
          'https://cdn.shopify.com/s/files/1/0622/4225/9192/products/IMG_1076_1646x.jpg?v=1643447584'
        }
        alt=""
      />

      <p className="text-md w-36 truncate text-center">Item Name?</p>
    </li>
    <li>
      
        className="h-36 w-36 rounded-full "
        src={
          'https://cdn.shopify.com/s/files/1/0622/4225/9192/products/IMG_1076_1646x.jpg?v=1643447584'
        }
        alt=""
      />

      <p className="text-md w-36 truncate text-center">Item Name?</p>
    </li>
  </ul> */}
      <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto">
        {links.map(({ domain, icon, social, text }) => (
          <li className="mb-4" key={social}>
            <a
              className="relative transition hover:-translate-y-2 hover:scale-103 duration-200 font-bold border-gray-100 border hover:bg-transparent py-4 w-100 block text-center hover:text-gray-500 hover:bg-gray-100 rounded-lg pl-12 md:px-12"
              href={domain}
              // alt={social}
              target="_blank"
              rel="noreferrer"
            >
              {/* <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">
              {link.emoji}
            </span> */}
              <span>{text}</span>
            </a>
          </li>
        ))}
        <li className="mb-4" key="email">
          <a
            className="relative transition hover:-translate-y-2 hover:scale-103 duration-200 font-bold border-gray-100 border hover:bg-transparent py-4 w-100 block text-center hover:text-gray-500 hover:bg-gray-100 rounded-lg pl-12 md:px-12"
            href="mailto: resinmods@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {/* <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">
              {link.emoji}
            </span> */}
            <span>Send an email!</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

Links.Layout = Layout
