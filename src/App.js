import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AdminPage from './components/AdminPage/AdminPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/admin">
              <AdminPage></AdminPage>
            </Route>


          </Switch>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
