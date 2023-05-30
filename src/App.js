import React, { useState ,useEffect} from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import LoginScreen from "./screen/LoginScreen";
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from "./screen/ProfileScreen"; 
import NotFound from "./NotFound";
import TvshowScreen from "./screen/TvshowScreen";
import MoviesScreen from './screen/MoviesScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 
  useEffect(() => {
     const unsubscribe = auth().onAuthStateChanged((userAuth) => {
      if (userAuth) { 
        
        dispatch(login({
          uid: userAuth.uid,
          email : userAuth.email,  
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
          <Route exact path = "/">
            <HomeScreen />           
          </Route>
          <Route path='/profile'>
              <ProfileScreen />
            </Route>
          <Route path = '/tvshow'>
              <TvshowScreen />
            </Route>   
          <Route path = '/movies'>
              <MoviesScreen/>
            </Route>
          
          <Route path={"*"} component={NotFound} />
          </Switch>
          )}
          </Router>
    </div>
  );
}

export default App;