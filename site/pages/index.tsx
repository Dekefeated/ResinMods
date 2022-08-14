import { useState } from 'react'
import { Layout } from '@components/common'
import Image from 'next/image'
import axios from 'axios'

export default function Home() {
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const subscribe = async (event: any) => {
    event.preventDefault()

    const validEmail = emailIsValid(email)
    if (validEmail) {
      setErrorMsg('')
      setSuccessMsg(() => `Awesome, you've been subscribed!`)
      console.log('Email is valid')
      try {
        const response = await axios.post('/api/mailchimp', { email })
        console.log(response)
        setEmail('')
        setSuccessMsg(() => `Awesome, you've been subscribed!`)
      } catch (error: any) {
        console.log({ error })
        setErrorMsg(() => error.response.data.error)
      }
    } else {
      console.log('Please enter a valid email')
      setErrorMsg('Please enter a valid email')
    }
  }

  function emailIsValid(email: string) {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleEmailChange = (event: any) => setEmail(event.target.value)

  return (
    <section
      style={{ backgroundColor: '#F4F2ED' }}
      className="text-black h-screen md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4"
    >
      <div className="md:flex-1 md:mr-10">
        <h1 className="font-pt-serif text-5xl font-bold mb-7">
          Coming Soon:{' '}
          <span className="bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
            ResinMods.com
          </span>
        </h1>
        <p className="font-pt-serif font-normal mb-7">
          Custom buttons, shells, and more are currently being handcrafted. Sign
          up to be notified when we launch our first round of buttons.
        </p>
        <div className="h-24">
          <form className="flex" onSubmit={subscribe}>
            <input
              type="text"
              name="email"
              className="bg-white w-auto px-6 py-4 rounded-l-lg border-2 border-black border-solid mb-2"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
            />

            <button className="bg-black text-white px-6 py-4 rounded-r-lg border-2 border-black border-solid mb-2">
              Sign up!
            </button>
          </form>
          {errorMsg && (
            <div className="bg-rose-200 px-2 py-3 mt-1 rounded flex items-center">
              <span className="mx-1 text-rose-500 font-bold">Error:</span>
              <span className="mx-1 text-rose-500">{errorMsg}</span>
            </div>
          )}
          {successMsg && (
            <div className="bg-emerald-200 px-2 py-3 mt-1 rounded flex items-center">
              <span className="mx-1 text-emerald-500 font-bold">Success: </span>
              <span className="mx-1 text-emerald-500">{successMsg}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
        <div className="relative">
          <Image
            className="rounded-lg"
            alt="Clear GBS with custom resin buttons"
            src="/assets/images/ComingSoonHeaderImage.webp"
            width="960px"
            height="540px"
            placeholder="blur"
            // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          {/* <img
            className="rounded-lg"
            src="/assets/images/ComingSoonHeaderImage.png"
          /> */}
        </div>
      </div>
    </section>
    // <section className="px-2 py-32 bg-white md:px-0 h-screen">
    //   <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    //     <div className="flex flex-wrap items-center sm:-mx-3">
    //       <div className="w-full h-screen md:w-1/2 md:px-3">
    //         <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
    //           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
    //             <span className="block xl:inline">ResinMods </span>
    //             <span className="block text-indigo-600 xl:inline">
    //               Coming Soon!
    //             </span>
    //           </h1>
    //           <p className="mx-auto text-base text-gray-500">
    //             Custom buttons, shells, and more are currently being
    //             handcrafted. Sign up to be notified when we launch our first
    //             round of buttons.
    //           </p>
    //           <p className="mx-auto text-base text-gray-500"></p>

    //           <div>
    //             <form className="flex" onSubmit={subscribe}>
    //               <input
    //                 type="text"
    //                 name="email"
    //                 className="w-3/5 px-4 py-3 mb-4 border border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
    //                 placeholder="Email address"
    //                 value={email}
    //                 onChange={handleEmailChange}
    //               />

    //               <button className="w-1/5 px-3 py-3 mb-4 text-white bg-indigo-600 rounded-lg">
    //                 Sign up!
    //               </button>
    //             </form>
    //             {errorMsg && (
    //               <div className="bg-rose-200 px-2 py-3 mt-1 rounded flex items-center">
    //                 <span className="mx-1 text-rose-500 font-bold">Error:</span>
    //                 <span className="mx-1 text-rose-500">{errorMsg}</span>
    //               </div>
    //             )}
    //             {successMsg && (
    //               <div className="bg-emerald-200 px-2 py-3 mt-1 rounded flex items-center">
    //                 <span className="mx-1 text-emerald-500 font-bold">
    //                   Success:{' '}
    //                 </span>
    //                 <span className="mx-1 text-emerald-500">{successMsg}</span>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full h-full md:w-1/2">
    //         <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
    //           <img src="/assets/images/ComingSoonHeaderImage.png" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

Home.Layout = Layout
