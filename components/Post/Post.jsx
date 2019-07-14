import React from 'react';
import { AugH2 } from 'utils/helpers/typography';
import PropTypes from 'prop-types';
import { PostStyle } from './style';

const Post = ({ title, tileSize }) => (
  <PostStyle tileSize={tileSize}>
    <AugH2 fontSize="16">
      {title}
    </AugH2>
  </PostStyle>
);

Post.defaultProps = {
  title: '',
  tileSize: 'small',
};

Post.propTypes = {
  title: PropTypes.string,
  tileSize: PropTypes.string,
};


export default Post;
