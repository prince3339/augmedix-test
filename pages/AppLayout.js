import React from 'react';
import Navbar from 'components/core/navbar/Navbar';
import styled from 'styled-components';
import colorMap from 'utils/mixins/colorMap';
import PropTypes from 'prop-types';

const LayoutStyle = styled.section`
  background: ${colorMap('white')};
  max-width: 117.8rem;
  margin: 0 auto;
  padding: 8rem 0;
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
