import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FC, PropsWithChildren, useContext } from "react";


const ProtectedRoute:FC<PropsWithChildren> = ({children}) => {
    const location = useLocation()
    const pathname = location.pathname
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) {
        return <Navigate to='/login' state={{from: pathname}}/>
    }

    return children
}

export { ProtectedRoute };
