import { useState } from 'react'
import { Layout } from '@components/common'
import Image from 'next/image'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    // alert(`The name you entered was: ${email}`)
    console.log(`Send this email: ${email}`)
    setEmail('')
  }

  return (
    <section className="px-2 py-32 bg-white md:px-0 h-screen">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">ResinMods </span>
                <span className="block text-indigo-600 xl:inline">
                  Coming Soon!
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Custom buttons, shells, and more are currently being
                handcrafted.
              </p>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Sign up to be notified when we launch our first round of
                buttons.
              </p>
              <div className="flex">
                <input
                  type="text"
                  name="email"
                  className="w-3/5 px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="Email address"
                />

                <button className="w-1/5 px-3 py-3 mb-4 text-white bg-indigo-600 rounded-lg">
                  Sign up!
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Home.Layout = Layout
