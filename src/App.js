import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import { BrowserRouter as  Router, Switch, Route,} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser, Provider } from "./features/useSlice"
import ProfileScreen from './screen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
     const unsubscribe = auth().onAuthStateChanged(userAuth => {
      if (userAuth) { 
        //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout())
      }
     });
     return unsubscribe;
    
  }, [dispatch]);

  return (
    <div className="app">
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Switch>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path = "/">
              <HomeScreen /> 
            </Route>
          </Switch>
          )}
        </Router>
    </div>
  );
}

export default App;