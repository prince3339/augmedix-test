import React from 'react';
import axios from 'axios';
import Router from 'next/router'
import PropTypes from 'prop-types';
import PostDetail from 'components/Post/PostDetail';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      comments: [],
    };

    this.getPosts = this.getPosts.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getComments = this.getComments.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount() {
    const { postId } = this.props;

    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      res => this.setState({ post: res.data }),
    ).then(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
        res => this.setState({ comments: res.data }),
      );
    });
  }

  getPosts() {
    const { postId } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      res => this.setState({ post: res.data }),
    ).then(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
        res => this.setState({ comments: res.data }),
      );
    });
  }

  getComments() {
    const { postId } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
      res => this.setState({ comments: res.data }),
    );
  }

  deleteComment(commentId) {
    const { postId } = this.props;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      res => this.setState({ post: res.data }),
    );
    axios({
      method: 'delete',
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    });
  }

  deletePost() {
    const { postId } = this.props;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(() => {
      console.log('Post Deleted Successfully!!!');
      //Router.push('/');
    });
  }

  render() {
    const { post, comments } = this.state;
    return (
      <PostDetail
        post={post}
        comments={comments}
        deletePost={this.deletePost}
        deleteComment={this.deleteComment}
      />
    );
  }
}

PostContainer.defaultProps = {
  postId: null,
};

PostContainer.propTypes = {
  postId: PropTypes.string,
};

export default PostContainer;
