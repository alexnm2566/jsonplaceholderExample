import React, { Fragment, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Post from "../components/Post";
import { connect } from "react-redux";
import { loadPosts } from "../actions/post";
import { Spin } from "antd";
import ErrorMessage from "../components/ErrorMessage";
import Paginator from "../components/Paginator";

const postsPerPage = 10;

const PostsList = ({ postsData: { posts, loading, error } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(postsPerPage);

  const pageAndPostsChange = useCallback(
    newPage => {
      setCurrentPage(newPage);
      setStartIndex(newPage * postsPerPage - postsPerPage);
      setEndIndex(newPage * postsPerPage);
    },
    [currentPage, startIndex, endIndex]
  );

  if (loading) {
    return (
      <div className='spinner-container'>
        <Spin size='large' />;
      </div>
    );
  }

  if (error) {
    return <ErrorMessage errorText={error} />;
  }

  return (
    <Fragment>
      <Paginator
        currentPage={currentPage}
        totalItems={posts.length}
        onPageChange={pageAndPostsChange}
        itemsPerPage={postsPerPage}
      />
      {posts.slice(startIndex, endIndex).map(post => {
        return (
          <Link
            key={post.id}
            to={{
              pathname: `post/${post.id}`,
              state: {
                postData: post
              }
            }}
          >
            <Post key={post.id} postTitle={post.title} postBody={post.body} />
          </Link>
        );
      })}
      <Paginator
        currentPage={currentPage}
        totalItems={posts.length}
        onPageChange={pageAndPostsChange}
        itemsPerPage={postsPerPage}
      />
    </Fragment>
  );
};

PostsList.propTypes = {
  postsData: PropTypes.object
};

const mapState = state => ({
  postsData: state.post
});

export default connect(mapState)(PostsList);
