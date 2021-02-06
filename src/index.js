import React from "react";
import { render } from "react-dom";
import {Router} from '@reach/router'
import Login from './pages/login'
import Dashboard from "./pages/dashboard";

require('./main.css');
const App = () => {
  return (
    <div >
<Router>
<Login path='/'/>
<Dashboard path='/dashboard/'/>
</Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
