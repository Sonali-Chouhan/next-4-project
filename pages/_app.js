import { Provider } from "react-redux";
import {store,wrapper} from "../Redux/Store"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider  store={store}>
     <Component {...pageProps} />
     </Provider>
    </>
  )
}


export default wrapper.withRedux(MyApp)
