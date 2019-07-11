import React from 'react';
import Navbar from 'components/core/navbar/Navbar';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayoutStyle = styled.section`
  background: white;
`;

const AppLayout = ({ children }) => (
  <LayoutStyle>
    <Navbar />
    <div>
      {children}
    </div>
  </LayoutStyle>
);

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
