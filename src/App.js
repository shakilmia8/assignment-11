import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoue';
import Manage from './components/Manage/Manage';
import AboutUs from './components/AboutUs/AboutUs';
import Update from './components/Update/Update';
import AddService from './components/AddService/AddService';
import Orders from './components/Orders/Orders';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path='/manage'>
              <Manage></Manage>
            </PrivateRoute>
            <PrivateRoute path='/manage/update/:id'>
              <Update></Update>
            </PrivateRoute>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
