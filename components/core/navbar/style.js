import styled from 'styled-components';

const LogoStyle = styled.a`
  display: inline-block;
  cursor: pointer;
  svg, span {
    display: inline-block;
    vertical-align: middle;
  }
  span {
    margin-left: 0.8rem;
  }
`;

const StyledHeader = styled.header`

`;

export {
  LogoStyle,
  StyledHeader,
};
