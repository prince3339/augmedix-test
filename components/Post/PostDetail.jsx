import React from 'react';
import PropTypes from 'prop-types';
import { AugH1, AugPara } from 'utils/helpers/typography';
import { PostDetailStyle } from './style';

const PostDetail = ({ post }) => (
  <PostDetailStyle>
    <AugH1
      bold
      color="darkBlue"
      fontSize="28"
    >
      {post.title}
    </AugH1>
    <AugPara>
      {post.body}
    </AugPara>
  </PostDetailStyle>
);

PostDetail.defaultProps = {
  post: {},
};

PostDetail.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default PostDetail;
