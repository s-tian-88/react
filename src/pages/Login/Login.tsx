import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    const fromPage = location.state?.from

    const handleLogin = () => {
        setAuthenticated(!authenticated);
        navigate(`${fromPage ? fromPage : '/'}`)
    };

    return (
        <>
            <h1>Login page</h1>
            <button className="btn" onClick={handleLogin}>
                {authenticated ? 'LogOut' : 'Login'}
            </button>
        </>
    )
};

export { Login };
