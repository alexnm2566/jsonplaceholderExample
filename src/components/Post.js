import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { Card } from "antd";

const Post = ({ postTitle, postBody }) => {
  return (
    <Fragment>
      <Container className='my-3'>
        <Card title={postTitle} hoverable className='rounded'>
          <p>{postBody}</p>
        </Card>
      </Container>
    </Fragment>
  );
};

Post.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired
};

export default Post;
