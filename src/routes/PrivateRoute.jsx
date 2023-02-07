import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({
    isAuthenticated,
    children,
}) => {
  return isAuthenticated ? children : <Redirect to="/log" />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}