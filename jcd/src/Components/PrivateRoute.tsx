import { Navigate } from 'react-router-dom';

interface Props {
  loggedIn: boolean;
  children: JSX.Element;
}

function PrivateRoute({loggedIn, children}: Props) {
    return loggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
