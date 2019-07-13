
import Link from 'next/link';
import React from 'react';
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
