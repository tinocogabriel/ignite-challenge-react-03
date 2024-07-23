import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { PublicationsProvider } from './context/PublicationsContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <PublicationsProvider>
          <Router />
        </PublicationsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
