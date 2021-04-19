import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import PokemonPage from '../components/pages/PokemonPage';
import PokemonsPage from '../components/pages/PokemonsPage';
import InicioPage from '../components/pages/InicioPage';
import Header from '../components/ui/navbar/Header';
import Favoritos from '../components/pages/Favoritos';
import { useDispatch } from 'react-redux';
import { pedirTipos } from '../actions/tipo';
import { pedirHabitats } from '../actions/habitat';


const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pedirTipos())
    dispatch(pedirHabitats())
  }, [dispatch])
    return (
        <Router>
            <Header />
            <div className="ajuste-header-fixed"></div>
          <div>
            <Switch>
              <Route path="/favoritos" exact component={Favoritos}/>
              <Route path="/pokemons" exact component={PokemonsPage}/>
              <Route path="/pokemon/:id" exact component={PokemonPage}/>
              {/* <Route path="/" exact component={InicioPage}/> */}
              <Redirect to="/pokemons" />
            </Switch>
          </div>
        </Router>
    )
}

export default AppRoutes
