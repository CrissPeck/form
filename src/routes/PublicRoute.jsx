import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

export const PublicRoute = ({
    isAuthenticated,
    children,
}) => {
  return !isAuthenticated ? children : <Redirect to="/home" />;
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};