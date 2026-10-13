import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({children}){
    const {isAuthenticated,loading}=useAuth();

    if(loading){
        return(
            <div style={styles.loadingContainer}>
                <div style={styles.spinner}></div>
                <p>Loading...</p>
            </div>
        );
    }

    return isAuthenticated? children : <Navigate to="/login"/>;
}

const styles={
    loading:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'80vh',
    },
    spinner:{   
        border:'4px solid #f3f3f3',
        borderTop:'4px solid #007bff',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        animation:'spin 1s linear infinite',
    },
}

export default PrivateRoute;