import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Alert } from "antd";
import { Container } from "react-bootstrap";
const ErrorMessage = ({ errorText }) => {
  return (
    <Fragment>
      <Container className='mt-5'>
        <Alert
          message='Error'
          description={errorText}
          type='error'
          closable
          showIcon
        />
      </Container>
    </Fragment>
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
