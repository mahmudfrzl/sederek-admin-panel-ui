import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {  Container } from "semantic-ui-react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Dashboard from './Layouts/Dashboard';
import Navi from './Layouts/Navi';
import ShoppingMallAdd from './Layouts/ShoppingMallAdd';
function App() {
  return (
    <div className="App">
        <Router>
          <Navi/>
          <Container  className="main ">
            <Route path="/add" exact component={ShoppingMallAdd}/>
            <Route path="/" exact component={Dashboard}/>
            
          </Container>
        </Router>
    </div>
  );
}

export default App;
