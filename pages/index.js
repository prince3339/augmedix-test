import Head from 'next/head';
import Test from 'containers/Test';
import React, { Fragment } from 'react';

class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Home - Augmedix</title>
        </Head>
        <Test />
      </Fragment>
    );
  }
}

export default IndexPage;
