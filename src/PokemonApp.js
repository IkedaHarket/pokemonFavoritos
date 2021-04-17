import React from 'react'
import { Provider } from 'react-redux'
import AppRoutes from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './store/store'
<>
</>
const PokemonApp = () => {
    return (
        <>
          <Provider store={store}>
            <AppRoutes />
          </Provider>
        </>
      );
}

export default PokemonApp
