import './App.css';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <div className="App">

      

      <AuthProvider>
        <Login></Login>


      </AuthProvider>

    </div>
  );
}

export default App;
