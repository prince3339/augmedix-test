import styled, { css } from 'styled-components';
import colorMap from 'utils/mixins/colorMap';

const buttonDefault = css`
  padding: 0.5em 1.5em;
  margin-bottom: 0;
  display: inline-block;
  background-color:  ${colorMap('white')};
  background-image: none;
  border-radius: 3px;
  outline: none !important;
  border: none;
  text-align: center;
  white-space: nowrap;
  color: ${colorMap('primary')};
  font-size: 1.6rem;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
  font-family: 'Open Sans', sans-serif;
`;

const AugButton = styled.button`
  ${buttonDefault};
  ${props => props.disabled && `
    cursor: no-drop;
    opacity: 0.65;
  `};

  /* m a i n */ 
  /* Black button for call to action items */ 
  ${props => props.main && `
    background-color:  ${colorMap('white')};
    color: ${colorMap('primary')};
    font-weight: bold;
    border: 1px solid ${colorMap('primary')};
    border-radius: 25px;
  `};

  /* Custom button design for different purposes */  
  ${props => props.custom && `
    background-color: ${props.invert ? colorMap(props.color) : colorMap('white')};
    color: ${props.invert ? colorMap('white') : colorMap(props.color)};

    ${props.borderColor && `
      border: 1px solid ${colorMap(props.borderColor)};
    `};

    ${props.borderWidth && `
      border-width: ${props.borderWidth}px;
    `};

    ${props.borderRadius && `
      border-radius: ${props.borderRadius}px;
    `};

    &:hover {
      background-color: ${colorMap(props.color)};
      color: ${colorMap('white')};
      ${props.borderColor && `
        border-color: ${colorMap(props.color)};
      `};
    }

    &:active, &:focus {
      background-color: ${colorMap(props.color)};
      color: ${colorMap('white')};
      ${props.borderColor && `
        border-color: ${colorMap(props.color)};
      `};
    }
    
    ${props.bgColor && `
      background-color: ${colorMap(props.bgColor)};
      ${props.fgColor && `
        color: ${colorMap(props.fgColor)};
      `};
      
      &:hover {
        ${props.blackMix && `
          background-color: ${colorMap(props.bgColor)};
        `};
        ${!props.blackMix && `
          background-color: ${colorMap(props.bgColor)};
        `};
        color: ${props.fgColor ? colorMap(props.fgColor) : colorMap('black')};
      }
  
      &:active {
        ${props.blackMix && `
          background-color: ${colorMap(props.bgColor)};
        `};
        ${!props.blackMix && `
          background-color: ${colorMap(props.bgColor)};
        `};
        color: ${props.fgColor ? colorMap(props.fgColor) : colorMap('black')};
      }
  
      &:focus {
        ${props.blackMix && `
          background-color: ${colorMap(props.bgColor)};
        `};
        ${!props.blackMix && `
          background-color: ${colorMap(props.bgColor)};
        `};
        color: ${props.fgColor ? colorMap(props.fgColor) : colorMap('black')};
      }
    `}
  `};

  ${props => props.bold && `
    font-weight: bold;
  `};

  ${props => props.big && `
    padding: 1.4rem 7rem;
  `};
  
  ${props => props.fontSize && `
    font-size: ${(props.fontSize) / 10}rem;
  `};

  ${props => props.transparent && `
    color: ${props.color ? colorMap(props.color) : colorMap('black')};
    background-color: transparent !important;
    border: none;
  `};
`;

export default AugButton;
