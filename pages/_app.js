import '../styles/globals.css'
import '../styles/main.css'
import { Provider } from 'react-redux';
import store from "../utils/store";
import  "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  if (!Component || !pageProps) return null; 
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
