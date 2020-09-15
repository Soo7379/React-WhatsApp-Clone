import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

import "./App.css";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId" component={Chat} />
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
