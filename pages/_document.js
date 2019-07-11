import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  constructor(props) {
    super(props);

    const { __NEXT_DATA__, env } = props;

    if (env) {
      __NEXT_DATA__.env = this.props.env;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet" />
          <meta meta="true" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <link rel="shortcut icon" type='image/x-icon' href="/static/favicon.co" />
          <meta name="theme-color" content="#288DC1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
