import styled from 'styled-components';
import colorMap from 'utils/mixins/colorMap';

const PostStyle = styled.li`
  display: block;
  background: ${colorMap('grey1')};
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    h2 {
      color: ${colorMap('white')};
    }
    background: ${colorMap('primary')};
    transition: background 0.2s;
  }

  ${props => props.tileSize === 'large' && `
    grid-column-end: span 2;
    grid-row-end: span 1;
  `};
  ${props => props.tileSize === 'extra-large' && `
    grid-column-end: span 2;
    grid-row-end: span 2;
  `};

  a {
    padding: 3.5rem;
    display: block;
    height: 100%;
    text-decoration: none;
  }
`;

const PostContainerStyle = styled.ul`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(20.5rem, auto);
  grid-auto-flow: dense;
  padding: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const PostDetailStyle = styled.div`

`;

export {
  PostStyle,
  PostDetailStyle,
  PostContainerStyle,
};
