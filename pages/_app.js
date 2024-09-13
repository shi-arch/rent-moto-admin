import '../styles/globals.css'
import '../styles/main.css'
import { Provider } from 'react-redux';
import store from "../utils/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp