import "./App.css";
import Home from './pages/Home/home'
import {Switch,Route} from 'react-router-dom'
import CarProfile from './pages/CarProfile/car-profile'


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars/:id" component={CarProfile} />
       
      </Switch>
     
      
       
     
    </div>
  );
}

export default App;
