import { RouteGuard } from '../components/RouteGuard'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <RouteGuard>
      <Component {...pageProps} />
    </RouteGuard>
      
  )
  
  
}
