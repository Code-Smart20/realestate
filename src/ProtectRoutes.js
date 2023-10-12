
import { useAuth } from './authentication/userAuth';

import { useNavigate } from 'react-router-dom';

const ProtectRoutes = ({ children }) => {

    const navigate = useNavigate();
    
    const { user, loading } = useAuth();

    if (!user && !loading)
    {
         <p>loading.........</p>
         navigate("/")
    }
    else
    {
        return children
    }
      
}

export default ProtectRoutes