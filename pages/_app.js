import 'style/main.scss';
import React from 'react';
import App, { Container } from 'next/app';
import AppLayout from './AppLayout';

class MyApp extends App {
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