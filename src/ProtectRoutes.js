
import { useNavigate } from 'react-router-dom';

const ProtectRoutes = ({children}) => {
    if (!user) {
        return useNavigate("/")
    } else {
        return children
    }
      
}

export default ProtectRoutes