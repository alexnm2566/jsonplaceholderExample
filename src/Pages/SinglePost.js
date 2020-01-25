import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import Post from "../components/Post";
import { Button, Spin, Icon } from "antd";
import { connect } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import { Container } from "react-bootstrap";

const SinglePost = props => {
  const [foundPost, setFoundPost] = useState(null);
  const [error, setError] = useState("");
  let title, body;
  try {
    title = props.location.state.postData.title;
    body = props.location.state.postData.body;
  } catch (err) {}

  const { postsData } = props;

  useEffect(() => {
    if (title && body) {
      return;
    }
    if (postsData.loading) {
      return;
    }
    const { id } = props.match.params;
    const postId = parseInt(id);

    const singlePost = postsData.posts.find(post => post.id === postId);
    if (singlePost) {
      setFoundPost(singlePost);
    } else {
      setError(`Could not find the post with id ${id}`);
    }
  }, [postsData.loading]);

  if (title && body) {
    return (
      <Fragment>
        <Container className='my-4'>
          <Link to='/'>
            <Button className='d-flex align-items-center' type='ghost'>
              <Icon type='left' />
              Back
            </Button>
          </Link>
        </Container>
        <Post postTitle={title} postBody={body} />;
      </Fragment>
    );
  }
  if (postsData.error) {
    return <ErrorMessage errorText={postsData.error} />;
  }
  if (error) {
    return <ErrorMessage errorText={error} />;
  }
  if (foundPost) {
    return (
      <Fragment>
        <Container className='my-4'>
          <Link to='/'>
            <Button className='d-flex align-items-center' type='ghost'>
              <Icon type='left' />
              Back
            </Button>
          </Link>
        </Container>
        <Post postTitle={foundPost.title} postBody={foundPost.body} />;
      </Fragment>
    );
  }
  return (
    <div className='spinner-container'>
      <Spin size='large' />;
    </div>
  );
};

SinglePost.propTypes = {};

const mapState = state => ({
  postsData: state.post
});

export default connect(mapState)(SinglePost);
