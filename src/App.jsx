import { Switch, Route, useHistory, Redirect } from 'react-router';
import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Tvshows from './components/Tvshows/Tvshows';
import Movies from './components/Movies/Movies';
import People from './components/People/People';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Notfound from './components/NotFound/Notfound';
import { MoviesContextProvider } from './MoviesContext';



function App() {

  let history = useHistory();

  let [loginUser, setLoginUser] = useState(null);

  function getUserInfo() {

    let encodedToken = localStorage.getItem('userToken');
    let userData = jwtDecode(encodedToken)
    setLoginUser(userData);
  }

  function logOut() {
    localStorage.removeItem('userToken');
    setLoginUser(null);
    history.push('/login')
  }

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserInfo()
    }
  }, [])



  return (
    <div className="App">
      <Navbar loginUser={loginUser} logOut={logOut} />

      <div className='container'>
        <Switch>
          <Redirect from='/' exact to='/home' />
          <ProtectedRoute path='/home' component={Home} loginUser={loginUser}/>
          <ProtectedRoute path='/movies' component={Movies} context={MoviesContextProvider}/>
          <ProtectedRoute path='/tvshows' component={Tvshows} context={MoviesContextProvider} />
          <ProtectedRoute path='/people' component={People} context={MoviesContextProvider} />
          

          <Route path='/register' render={(props) => <Register {...props} />} />
          <Route path='/login' render={(props) => <Login {...props} getUserInfo={getUserInfo} />} />
          <Route path='*' component={Notfound}></Route>



        </Switch>
      </div>

    </div>
  );
}

export default App;
