import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Pagination } from "antd";
import { Container } from "react-bootstrap";

const Paginator = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  return (
    <Fragment>
      <Container className='my-4'>
        <Pagination
          current={currentPage}
          total={totalItems}
          onChange={onPageChange}
          pageSize={itemsPerPage}
        />
      </Container>
    </Fragment>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Paginator;
