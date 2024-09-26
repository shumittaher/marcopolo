import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import BookingPage from './components/BookingPage/BookingPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import ToursProvider from './contexts/toursProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyPage from './components/MyPage/MyPage';
import TourOffering from './components/TourOffering/TourOffering';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="app ">

      <AuthProvider>
        <ToursProvider>
          <BrowserRouter>
            <Header />
            <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/destinations">
                <TourOffering></TourOffering>
              </Route>

              <PrivateRoute path="/booking/:id">
                <BookingPage></BookingPage>
              </PrivateRoute>

              <PrivateRoute path="/userPage/:userEmail">
                <MyPage></MyPage>
              </PrivateRoute>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/admin">
                <AdminPage></AdminPage>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>
            <Footer />
          </BrowserRouter>
        </ToursProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
