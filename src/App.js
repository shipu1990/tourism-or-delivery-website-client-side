import Home from './Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import AuthProvider from './context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Destination from './Pages/Destination/Destination';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/destination">
          <Destination></Destination>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
            <PrivateRoute path="/booking/:serviceId">
             <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
            <Notfound></Notfound>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
