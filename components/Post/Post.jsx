import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title }) => (
  <p>
    {title}
  </p>
);

Post.defaultProps = {
  title: '',
};

Post.propTypes = {
  title: PropTypes.string,
};


export default Post;
