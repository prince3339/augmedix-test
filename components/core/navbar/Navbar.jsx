
import Link from 'next/link';
import React from 'react';
import Button from 'components/core/buttons';
import Router from 'next/router';
import { Span } from 'utils/helpers/typography';
import PropTypes from 'prop-types';
import Logo from './assets/svg';
import {
  LogoStyle,
  StyledHeader,
} from './style';

const Navbar = ({ currentRoute }) => (
  <StyledHeader>
    <nav>
      <Link href="/">
        <LogoStyle>
          <Logo />
          <Span
            bold
            color="darkBlue"
            fontSize="18"
          >
            BLOG
          </Span>
        </LogoStyle>
      </Link>
      {currentRoute === '/PostDetail' && (
        <Button
          fgColor="primary"
          custom
          bgColor="white"
          onClick={() => Router.push('/')}
          fontSize="14"
          borderColor="primary"
          borderRadius="25"
        >
          Back to all posts
        </Button>
      )}
    </nav>
  </StyledHeader>
);

Navbar.defaultProps = {
  currentRoute: '',
};

Navbar.propTypes = {
  currentRoute: PropTypes.string,
};

export default Navbar;
