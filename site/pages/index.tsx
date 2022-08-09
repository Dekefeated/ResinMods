import { useState } from 'react'
import { Layout } from '@components/common'
import Image from 'next/image'
import axios from 'axios'

export default function Home() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (event: any) => {
    event.preventDefault()
    setState('Loading')
    if (email.trim().length <= 0) {
      setState('Please e')
    }

    try {
      const response = await axios.post('/api/mailchimp', { email })
      console.log(response)
      setState('Success')
      setEmail('')
    } catch (error) {
      console.log({ error })
      // setErrorMsg(error.response.data.error)
      setState('Error')
    }
  }

  const handleEmailChange = (event: any) => setEmail(event.target.value)

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
              <div>
                <form className="flex" onSubmit={subscribe}>
                  <input
                    type="text"
                    name="email"
                    className="w-3/5 px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />

                  <button className="w-1/5 px-3 py-3 mb-4 text-white bg-indigo-600 rounded-lg">
                    Sign up!
                  </button>
                </form>
                {state === 'Error' && `${errorMsg}`}
                {state === 'Success' && `Awesome, you've been subscribed!`}
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
