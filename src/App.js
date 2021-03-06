// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'
import Content from './component/Content/Content';
import Services from './component/Services/Services';
import Error from './component/Error/Error';
import Blog from './component/Blog/Blog';
import ABout from './component/About/ABout';


function App() {
  return (

    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Content></Content>
          </Route>
          <Route path="/home">
            <Content></Content>
          </Route>
          <Route path="/courses">
            <Services></Services>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <ABout></ABout>
          </Route>
          <Route path="/*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>

  );
}

export default App;
