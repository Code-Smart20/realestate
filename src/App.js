
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Header} from './components';
import { Home, Profile, SignUp,SignIn, Offers, ForgotPass,CreateListing } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './authentication/userAuth';


function App() {
  return (
    <div className="app">

      <AuthContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="profile" element={<Profile />} />

          <Route path="/offers" element={<Offers />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/create_listing" element={<CreateListing />} />

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
     
      </AuthContextProvider> 

    </div>
  );
}

export default App;
