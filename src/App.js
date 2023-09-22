
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, Profile, SignUp,SignIn, Offers, ForgotPass, } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="app">

      <Header />
      
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        
        <Route path="/profile" element={<Profile/> } />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
}

export default App;
