import React from 'react';
import axios from 'axios';
import PostFeed from 'components/Post/PostFeed';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => this.setState({ posts: res.data }),
    );
  }

  render() {
    const { posts } = this.state;
    return (
      <PostFeed
        posts={posts}
      />
    );
  }
}

export default PostContainer;
