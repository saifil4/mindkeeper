import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import SignUp from './pages/signup';
import Main from './pages/main';
import LogIn from './pages/login';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
