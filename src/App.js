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
import MyOrder from './Pages/MyOrder/MyOrder';
import AllOrder from './Pages/AllOrder/AllOrder';
import AddOrder from './Pages/AddOrder/AddOrder';

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
          <Route path="/myorder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/allorder">
            <AllOrder></AllOrder>
          </Route>
          <Route path="/addorder">
            <AddOrder></AddOrder>
          </Route>
            <PrivateRoute path="/booking/:destinationId">
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
