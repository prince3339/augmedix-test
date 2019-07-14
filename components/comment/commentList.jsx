import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import { CommentListContainerStyle } from './style';

const CommentList = ({
  comments,
  deleteComment,
}) => (
  <CommentListContainerStyle>
    {comments.map(comment => (
      <Comment
        key={comment.id}
        comment={comment}
        deleteComment={deleteComment}
      />
    ))}
  </CommentListContainerStyle>
);

CommentList.defaultProps = {
  comments: [],
  deleteComment: () => {},
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      postId: PropTypes.number,
    }),
  ),
  deleteComment: PropTypes.func,
};

export default CommentList;
