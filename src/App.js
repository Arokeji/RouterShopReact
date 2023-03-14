import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Showroom from './components/Showroom/Showroom';
import Login from './components/Login/Login';

// Carga los componenes con lazy
const Product = React.lazy(() => import('./components/Product/Product'));
const Account = React.lazy(() => import('./components/Account/Account'));

// Contexto para login
export const AuthContext = React.createContext({ user: null });

function App() {

  // Estado del favorito
  const [favorito, setFavorito] = React.useState("No has marcado ningún artículo como favorito");
  // Estado del login
  const [authInfo, setAuthInfo] = React.useState({ user: null });


  return (

    <AuthContext.Provider value={authInfo}>

      <div className="App">
        <BrowserRouter>
          <Header />
          {authInfo?.user ? <p>Hola {authInfo.user}</p> : <p>Haz login para entrar a tu cuenta</p>}

          <Routes>
            {/* Rutas lazy */}
            <Route
              path="/productos"
              element={<React.Suspense fallback={<p>Cargando pagina...</p>}>
                <Showroom />
              </React.Suspense>}>
            </Route>
            <Route
              path="/product-detail/:id"
              element={<React.Suspense fallback={<p>Cargando pagina...</p>}>
                <Product
                  setFavorito={setFavorito}
                />
              </React.Suspense>}>
            </Route>

            {/* Rutas comunes */}
            <Route
              path='/'
              element={<span>Selecciona una categoria</span>}>
            </Route>
            <Route
              path='/login'
              element={<Login setAuthInfo={setAuthInfo}/>}>
            </Route>
            <Route
              path='/my-account'
              element={<Account favorito={favorito} />}>
            </Route>

            {/* Not found */}
            <Route
              path="*"
              element={<span>Esta pagina no existe</span>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

    </AuthContext.Provider>
  );
}

export default App;
