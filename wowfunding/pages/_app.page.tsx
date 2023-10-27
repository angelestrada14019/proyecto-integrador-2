import type { AppProps } from 'next/app';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "styles/material-theme"

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
      <Component {...pageProps} />
    
        <style jsx global>{`
          

          #__next {
            height: 100%;
          }
        `}</style>
  </ThemeProvider>
}

export default MyApp
