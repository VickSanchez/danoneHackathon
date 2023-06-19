import { useState, useLayoutEffect, useReducer } from 'react';
import { permisoCheck } from '../../helpers/permisoCheck';
import { UseFetchGet } from '../../hooks/UseFetchGet';
import { types } from '../Types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const init = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return {
    logged: !!user,
    user: user
  }
}


export const AuthProvider = ({ children }) => {
  
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = (user) => {
    const action = {
      type: types.login,
      payload: user
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
    // console.log(user)
  }
   
  const logout = () => {
    sessionStorage.removeItem('user');
    window.location.replace(`${process.env.REACT_APP_SGA_LOGIN_RTP}`)
    const action = { type: types.logout };
    dispatch(action);
  }

  const permisosSGA = {
    sga12cpt:false,
    sga2cpt0p1:false,
    sga1cpt0p1:false,
    sga2cpt0p1t1:false,
    sga3cpt0p1:false,
    sga4cpt0p1:false,
    sga2cpt0p2:false,
    sga1cpt0p2:false,
    sga2cpt0p2t1:false,
    sga3cpt0p2:false,
    sga4cpt0p2:false,
    sga2cpt0p3:false,
    sga1cpt0p3:false,
    sga2cpt0p3t1:false,
    sga3cpt0p3:false,
    sga4cpt0p3:false,
    sga2cpt0p4:false,
    sga2cpt0p4t1:false,
    sga1cpt0p4t1:false,
    sga2cpt0p4t2:false,
    sga4cpt0p4t2:false,
    sga12rep:false,
    sga2rep0p1:false,
    sga2rep0p2:false,
    sga2rep0p3:false,
    sga12trs:false,
    sga2trs0p1:false,
    sga1trs:false,
    sga2trs0p2:false,
    sga2cpt0p123inp0idPer:false,
    sga2cpt0p1234t00:false,
    sga1cpt0p1inp0idTrab:false,
    sga1cpt0p2inp0idTrab:false,
    sga1cpt0p3inp0idTrab:false,
    sga1cpt0p4inp0idTrab:false,
  }

  
  const [permisosUser, setPermisosUser] = useState([])

  const permisos =permisoCheck(permisosSGA,permisosUser)

  const idApp = sessionStorage.getItem('app')

  const [userLogged, setUserLogged] = useState({})
  const [cargando, setCargando] = useState(true)

  useLayoutEffect(() => {
    const credencial = authState.user?.credencial

    if( Boolean(credencial) ){
    UseFetchGet(`${process.env.REACT_APP_SGA_ROL}?idUsuario=${credencial}&idAplicacion=${idApp}`)
     .then(resp => {
        setPermisosUser(resp[0].permisos)
      })
    UseFetchGet(`${process.env.REACT_APP_SGA_TRABAJADORLOGGED}/${credencial}`)
    //  .then((r) => { setUserLogged( r ); setCargando(false);  } )                    //! Original 
     .then((r) => { setUserLogged( {...r, moduloClave:0 } ); setCargando(false);  } )    //! Checar diferentes modulos
     .catch( () => { setCargando(false); console.log('fallo en la peticion') } )
  }

  }, [authState.logged])
  


const [noToken, setNoToken] = useState(false)

 

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
      ...permisos,
      setPermisosUser,
      setNoToken,
      noToken,
      userLogged,
      cargando, 
      
    }}>
      {children}
    </AuthContext.Provider>
  )
}
