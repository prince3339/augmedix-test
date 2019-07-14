import Head from 'next/head';
import PropTypes from 'prop-types';
import PostDetail from 'containers/PostDetail';
import React, { Fragment } from 'react';

class IndexPage extends React.Component {
  static async getInitialProps(ctx) {
    const { query } = ctx;
    const { postId } = query;
    return {
      postId,
    };
  }

  render() {
    const { postId } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Post Detail - Augmedix</title>
        </Head>
        <PostDetail
          postId={postId}
        />
      </Fragment>
    );
  }
}

IndexPage.defaultProps = {
  postId: null,
};

IndexPage.propTypes = {
  postId: PropTypes.string,
};

export default IndexPage;
