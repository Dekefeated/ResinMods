import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const router = useRouter()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  if (router.pathname != '/links') {
    return (
      <>
        <Head />
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </>
    )
  } else {
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}
