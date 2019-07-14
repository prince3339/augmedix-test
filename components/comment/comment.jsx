import React from 'react';
import Button from 'components/core/buttons';
import PropTypes from 'prop-types';
import { AugH3, Anchor, AugPara } from 'utils/helpers/typography';
import { CommentStyle } from './style';

const Comment = ({
  comment,
  deleteComment,
}) => (
  <CommentStyle>
    <AugH3
      fontSize="16"
    >
      {comment.name}
    </AugH3>
    <Anchor
      href={`mailto: ${comment.email}`}
      fontSize="14"
    >
      {comment.email}
    </Anchor>
    <AugPara
      fontSize="14"
    >
      {comment.body}
    </AugPara>
    <Button
      type="button"
      color="warn"
      onClick={() => deleteComment(comment.id)}
      fontSize="14"
      transparent
    >
      Delete this comment
    </Button>
  </CommentStyle>
);

Comment.defaultProps = {
  comment: {},
  deleteComment: () => {},
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    postId: PropTypes.number,
  }),
  deleteComment: PropTypes.func,
};

export default Comment;
