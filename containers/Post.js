import Post from 'components/Post/Post';
import React from 'react';
import axios from 'axios';

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
      <React.Fragment>
        {posts.map(post => (
          <Post
            title={post.title}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default PostContainer;
