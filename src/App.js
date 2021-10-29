import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import BookingPage from './components/BookingPage/BookingPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import ToursProvider from './contexts/ToursProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyPage from './components/MyPage/MyPage';


function App() {
  return (
    <div className="app">

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
                <Home></Home>
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


            </Switch>
          </BrowserRouter>
        </ToursProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
