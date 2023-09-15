
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Profile, SignUp,SignIn, Offers, ForgotPass, } from './pages';




function App() {
  return (
    <div className="app">

      <Header />
      
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/profile" element={<Profile/> } />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        
      </Routes>
    </div>
  );
}

export default App;
