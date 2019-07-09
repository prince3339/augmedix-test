import Head from 'next/head';
import React, { Fragment } from 'react';

class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Home - Augmedix</title>
        </Head>
        <p>
          Landed on Home successfully!!!
        </p>
      </Fragment>
    );
  }
}

export default IndexPage;
