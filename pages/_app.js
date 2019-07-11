import React from 'react';
import AppLayout from './AppLayout';
import App, { Container } from 'next/app';

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props;
    return (
      <Container>
        <AppLayout>
          <Component
            {...pageProps}
          />
        </AppLayout>
      </Container>
    )
  }
}

export default MyApp;