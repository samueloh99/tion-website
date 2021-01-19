import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import PartnersPage from './pages/PartnersPage/PartnersPage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/partners" component={PartnersPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
