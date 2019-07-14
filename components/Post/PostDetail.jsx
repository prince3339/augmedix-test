import React from 'react';
import Button from 'components/core/buttons';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import CommentList from 'components/comment/CommentList';
import { AugH1, Span, AugPara } from 'utils/helpers/typography';
import EditIcon from './assets/svg';
import PostUpdateForm from './PostUpdateForm';
import { PostDetailStyle } from './style';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
    };

    this.enableEditMode = this.enableEditMode.bind(this);
  }

  enableEditMode() {
    this.setState({
      isEditMode: true,
    });
  }

  render() {
    const { isEditMode } = this.state;

    const {
      post,
      comments,
      deletePost,
      deleteComment,
    } = this.props;
    return (
      <PostDetailStyle>
        {isEditMode
          && (
            <Formik
              onSubmit={(values, { setErrors }) => {
                console.log(post);
              }}
              component={PostUpdateForm}
              initialValues={post}
            />
          )
        }

        <AugH1
          bold
          color="darkBlue"
          fontSize="28"
        >
          {post.title}
          <Button
            type="button"
            color="primary"
            onClick={this.enableEditMode}
            transparent
          >
            <EditIcon />
          </Button>
        </AugH1>
        <AugPara>
          {post.body}
        </AugPara>
        <div className="post-action">
          <Button
            type="button"
            color="primary"
            fontSize="14"
            transparent
          >
            Update this post
          </Button>
          <Button
            type="button"
            color="warn"
            onClick={deletePost}
            fontSize="14"
            className="margin-left-10"
            transparent
          >
           Delete this post
          </Button>
        </div>
        <div className="comment-container">
          <Span
            bold
            fontSize="18"
          >
            Comments (
            {comments.length}
            )
          </Span>
          <CommentList
            comments={comments}
            deleteComment={deleteComment}
          />
        </div>
      </PostDetailStyle>
    );
  }
}

PostDetail.defaultProps = {
  post: {},
  comments: [],
  deletePost: () => {},
  deleteComment: () => {},
};

PostDetail.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      postId: PropTypes.number,
    }),
  ),
  deletePost: PropTypes.func,
  deleteComment: PropTypes.func,
};

export default PostDetail;
