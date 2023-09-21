import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lists from './Components/Lists';
import Result from './Components/Result';

function App() {
  return (
    
    // <>
    //   <Router>
    //   <Switch>
    //     <Route path='/' exact Component={Lists}></Route>
    //     <Route path='/rseult' Component={Result}></Route>
    //   </Switch>
    // </Router>
    // </>
    <>
     <Lists />
      <Result />
    </>
   

  );
}

export default App;
