import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "../components/ErrorMessage";

const NotFound = props => {
  return <ErrorMessage errorText='Page not found' />;
};

NotFound.propTypes = {};

export default NotFound;
