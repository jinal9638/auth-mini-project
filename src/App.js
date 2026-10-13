import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App(){
  return(
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
    <div className='App'>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute><Dashboard/></PrivateRoute>}/>
      
      </Routes>
    </div>
    </AuthProvider>
    </BrowserRouter>
  )
};

export default App;