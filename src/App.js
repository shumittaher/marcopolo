import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">



      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>

            <Route to="/Login">

              <Login></Login>

            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
