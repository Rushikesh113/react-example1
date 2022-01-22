
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from '../src/components/NavBar/NavBar.jsx';
import ProductListing from './components/ProductListing/ProductListing';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Notes from './components/Notes/Notes.jsx';
//import Students from "../src/components/students/Students";
function App() {
  return (
    <div className="App"> 
      <Router>
      {/* <NavBar /> */}
      <Notes />
      <Switch>  
         {/* <Route path='/' exact component={ProductListing} />
         <Route path='/product/:productId ' exact component={ProductDetail} /> */}
         {/* <Route>404 Not Found </Route> */}
      </Switch>
      </Router>   
        
        {/* <Students /> */}
    </div>
  );
}

export default App;
