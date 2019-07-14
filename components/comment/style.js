import styled from 'styled-components';
import colorMap from 'utils/mixins/colorMap';

const CommentStyle = styled.li`
  a {
    text-decoration: none;
  }

  button {
    padding: 0;
  }

  padding-bottom: 2rem;
  border-bottom: 1px solid ${colorMap('grey1')};
`;

const CommentListContainerStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export {
  CommentStyle,
  CommentListContainerStyle,
};
