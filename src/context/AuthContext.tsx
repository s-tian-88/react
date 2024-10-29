import { createContext } from "react";

export interface IAuthContext {
    authenticated: boolean,
    setAuthenticated: (arg: boolean) => void
}

const AuthContext = createContext<IAuthContext>({
    authenticated: false,
    setAuthenticated: (auth) => (AuthContext._currentValue.authenticated = auth)
});

export { AuthContext };
