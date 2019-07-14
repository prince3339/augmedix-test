import React from 'react';
import Navbar from 'components/core/navbar/Navbar';
import styled from 'styled-components';
import colorMap from 'utils/mixins/colorMap';
import PropTypes from 'prop-types';

const LayoutStyle = styled.section`
  background: ${colorMap('white')};
  max-width: 117.8rem;
  margin: 0 auto;
  padding: 8rem 2rem;
`;

const AppLayout = ({
  children,
  currentRoute,
}) => (
  <LayoutStyle>
    <Navbar
      currentRoute={currentRoute}
    />
    <div>
      {children}
    </div>
  </LayoutStyle>
);

AppLayout.defaultProps = {
  currentRoute: '',
};

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
  currentRoute: PropTypes.string,
};

export default AppLayout;
