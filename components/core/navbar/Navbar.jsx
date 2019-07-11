import React from 'react';
import PropTypes from 'prop-types';
import Logo from './assets/svg';
import StyledHeader from './style';

const Navbar = ({ currentRoute }) => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

Navbar.defaultProps = {
  currentRoute: '',
};

Navbar.propTypes = {
  currentRoute: PropTypes.string,
};

export default Navbar;
