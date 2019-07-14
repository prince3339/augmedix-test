import 'style/main.scss';
import React from 'react';
import App, { Container } from 'next/app';
import { Router } from '../routes';
import AppLayout from './AppLayout';

class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      currentRoute: '',
    };
  }

  componentDidMount() {
    if (process.browser) {
      window.onload = () => {
        this.setState({
          currentRoute: Router.router.route,
        });
      };

      Router.onRouteChangeComplete = () => {
        this.setState({
          currentRoute: Router.router.route,
        });
      };
    }
  }

  render() {
    const {
      Component,
      pageProps,
    } = this.props;
    const { currentRoute } = this.state;

    return (
      <Container>
        <AppLayout currentRoute={currentRoute}>
          <Component
            {...pageProps}
          />
        </AppLayout>
      </Container>
    )
  }
}

export default MyApp;