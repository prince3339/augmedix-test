import Head from 'next/head';
import Post from 'containers/Post';
import React, { Fragment } from 'react';

const IndexPage = () => (
  <Fragment>
    <Head>
      <title>Home - Augmedix</title>
    </Head>
    <Post />
  </Fragment>
);

export default IndexPage;
