import React from 'react';
import { AugH2 } from 'utils/helpers/typography';
import PropTypes from 'prop-types';
import { Link } from '../../routes';
import { PostStyle } from './style';

const Post = ({
  title,
  postId,
  tileSize,
}) => (
  <PostStyle
    tileSize={tileSize}
  >
    <Link
      route={`/post/${postId}`}
      prefetch
    >
      <a>
        <AugH2
          bold={tileSize === 'large' || tileSize === 'extra-large'}
          fontSize={tileSize === 'large' || tileSize === 'extra-large' ? 28 : 16}
        >
          {title}
        </AugH2>
      </a>
    </Link>
  </PostStyle>

);

Post.defaultProps = {
  title: '',
  postId: null,
  tileSize: 'small',
};

Post.propTypes = {
  title: PropTypes.string,
  postId: PropTypes.number,
  tileSize: PropTypes.string,
};


export default Post;
