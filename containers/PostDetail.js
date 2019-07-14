import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import PostDetail from 'components/Post/PostDetail';
import { useRouter } from 'next/router';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { postId } = this.props;

    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      res => this.setState({ post: res.data }),
    );
  }

  render() {
    const { post } = this.state;
    return (
      <PostDetail
        post={post}
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
