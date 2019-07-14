import styled from 'styled-components';
import colorMap from 'utils/mixins/colorMap';
import breakpoint from 'utils/mixins/breakpoints';

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

  ${breakpoint.xs`
    grid-column-end: span 1;
    grid-row-end: span 1;
  `};

  a {
    padding: 3.5rem;
    display: block;
    height: 100%;
    text-decoration: none;
  }
`;

const PostContainerStyle = styled.ul`
  margin: 2rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: 20px;
  grid-auto-rows: minmax(20.5rem, auto);
  grid-auto-flow: dense;
  padding: 10px;
  list-style: none;

  ${breakpoint.ltSm`
    grid-template-columns: none;
  `};
`;

const PostDetailStyle = styled.div`
  padding: 1rem;
  .post-action {
    margin-top: 5rem;
    button {
      padding: 0;
      &:first-child {
        margin-right: 2rem;
      }
    }
  }

  h1 {
    button {
      margin-left: 1.6rem;
      padding: 0;
    }
  }

  .comment-container {
    margin-top: 2.5rem;
    padding-top: 5.5rem;
    border-top: 1px solid ${colorMap('grey1')};
  }
`;

const FormStyle = styled.div`
  margin-top: 2.5rem;
  .form-field {
    width: 100%;
    padding: 1.5rem 1rem;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(209, 211, 211, 0.5);
    color: ${colorMap('darkBlue')};
    font-size: 1.4rem;

    &--input {
      height: 3.5rem;
    }

    &--textarea {
      resize: none;
      margin-top: 2rem;
    }
  }
  .form-actions {
    margin-top: 3rem;
    button {
      padding: 0.8em 3em;
      &:first-child {
        margin-right: 0.5rem;
      }
    }
  }
`;

export {
  PostStyle,
  FormStyle,
  PostDetailStyle,
  PostContainerStyle,
};
