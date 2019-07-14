import styled from 'styled-components';
import colorMap from 'utils/mixins/colorMap';

const PostStyle = styled.article`
  padding: 3.5rem;
  background: ${colorMap('grey1')};
  transition: background 0.2s;
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
`;

const PostContainerStyle = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(20.5rem, auto);
  grid-auto-flow: dense;
  padding: 10px;
`;

export {
  PostStyle,
  PostContainerStyle,
};
