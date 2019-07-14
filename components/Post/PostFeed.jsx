import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { PostContainerStyle } from './style';

const feedSizes = [
  'regular',
  'large',
  'extra-large',
];

const PostFeed = ({ posts }) => (
  <PostContainerStyle>
    {posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        postId={post.id}
        tileSize={feedSizes[Math.floor(Math.random() * 3)]}
      />
    ))}
  </PostContainerStyle>
);

PostFeed.defaultProps = {
  posts: [],
};

PostFeed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
};

export default PostFeed;
