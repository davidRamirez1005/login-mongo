import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const logins = ({ username }) => {
        setUser({ username });
        navigate("/Profile");
};
const logout = () => {
    setUser(null);
    navigate("/");
};

const auth = { user, logins, logout };

return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute(props) {
    const auth = useAuth();

if (!auth.user) {
    return <Navigate to="/login" />;
}

return props.children;
}

export { AuthProvider, AuthRoute, useAuth };
