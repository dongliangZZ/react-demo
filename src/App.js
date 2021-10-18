import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FirstPerson from './components/chat/FirstPerson';
import SecondPerson from './components/chat/SecondPerson';
import PersonSwitcher from './components/chat/PersonSwitcher';

//components
import Todolist from './components/todolist/todolist';

function App() {
  

  return (
    <div className="App">
      <Todolist />
      <Router>
        <PersonSwitcher />
        <Switch>
          <Route path='/' component={FirstPerson} exact />
          <Route path="/first-person" component={FirstPerson} exact />
          <Route path="/second-person" component={SecondPerson} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
