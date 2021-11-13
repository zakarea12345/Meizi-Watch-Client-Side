import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Regsiter from './Pages/LogIn/Register/Regsiter';
import AuthProvider from './Contexts/AuthProvider';
import Purchase from './Pages/PurchaseNow/Purchase';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import GiveReview from './Pages/Dashboard/GiveReview/GiveReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/LogIn/AdminRoute/AdminRoute';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';


function App() {
  return (
   <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
       
        <Route path="/exploreMore">
          <ExploreMore />
        </Route>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/register">
          <Regsiter/>
        </Route>
        <Route path="/pay">
          <Pay/>
        </Route>
        <Route path="/myOrders">
          <MyOrder/>
        </Route>
        <Route path="/reviews">
          <GiveReview/>
        </Route>
        <AdminRoute path="/makeAdmin">
          <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path="/manageAllOrders">
          <ManageAllOrders/>
        </AdminRoute>
        <PrivateRoute path="/purchase/:productID">
          <Purchase/>
        </PrivateRoute>
      </Switch>
    </Router>
    </AuthProvider>  
  );
}

export default App;
