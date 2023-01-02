import { CacheProvider, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import createEmotionCache from 'styles/createEmotionCache';
import theme from 'styles/theme';

const clientSideEmotionCache = createEmotionCache();

type T_MyAppProps = AppProps & {
  emotionCache: any
}

export default function App(props: T_MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  )
}
