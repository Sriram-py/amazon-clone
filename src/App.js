import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import{BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
  return (
    /// BEM
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
      </div>  
    </BrowserRouter>
      
        
        
     
    
    
  );
}

export default App;

