import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import './styles/global.css'
import { defaultTheme } from './styles/themes/default'

function App() {
   return(
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
   )
  
}

export default App
