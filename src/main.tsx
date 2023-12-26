import ReactDOM from 'react-dom/client'
import App from './Routes/mainHome/App.tsx'
import './style/global.scss'
import { Provider } from 'react-redux'
import {persistor, store} from './redux/store.ts'
import { BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { createContext } from 'react'


const app = initializeApp({

  apiKey: "AIzaSyCIcUKOmVHgxz33tMsa9t_lWPLxE1CPcSE",

  authDomain: "shop-react-cd329.firebaseapp.com",

  projectId: "shop-react-cd329",

  storageBucket: "shop-react-cd329.appspot.com",

  messagingSenderId: "1019908970241",

  appId: "1:1019908970241:web:d6b2496aa9828b51acad00",

  measurementId: "G-7BLH9R0WJG"

})

  export const Context = createContext<any>(null)

  const auth = getAuth(app)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Context.Provider value={{auth}}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </Context.Provider>
  </BrowserRouter>



)
