import styled, { css } from 'styled-components';
import colorMap from 'utils/mixins/colorMap.style';
import breakpoint from 'utils/mixins/breakpoints.style';

const CommonStyle = css`
  ${props => props.bold && `
    font-weight: bold;
  `};
  ${props => props.extraBold && `
    font-weight: 900;
  `};
  ${props => props.italic && `
    font-style: italic;
  `};
  ${props => props.color && `
    color: ${colorMap(props.color)};
  `};
  ${props => props.bgColor && `
    background-color: ${colorMap(props.bgColor)};
  `};
  ${props => props.fontSize && `
    font-size: ${(props.fontSize) / 10}rem;
  `};
  ${props => props.letterSpacing && `
    letter-spacing: ${props.letterSpacing}px;
  `}
  ${props => props.lineHeight && `
    line-height: ${(props.lineHeight) / 10}rem;
  `};
  ${props => props.opacity && `
    opacity: ${props.opacity};
  `};
`;

const AugH1 = styled.h1`
  font-size: 4.2rem;
  color: ${colorMap('black')};
  ${CommonStyle};

  ${breakpoint.ltSm`
    font-size: 3.2rem;
  `};
`;

const AugH2 = styled.h2`
  font-size: 3.2rem;
  color: ${colorMap('black')};
  ${CommonStyle};

  ${breakpoint.ltSm`
    font-size: 2.4rem;
  `};
`;

const AugH3 = styled.h3`
  font-size: 2.4rem;
  color: ${colorMap('black')};
  ${CommonStyle};

  ${breakpoint.ltSm`
    font-size: 1.8rem;
  `};
`;

const AugH4 = styled.h4`
  font-size: 1.8rem;
  color: ${colorMap('black')};
  ${CommonStyle};

  ${breakpoint.ltSm`
    font-size: 1.6rem;
  `};
`;

const AugH5 = styled.h5`
  font-size: 1.2rem;
  color: ${colorMap('black')};
  ${CommonStyle};
`;

const AugPara = styled.p`
  font-size: 1.6rem;
  white-space: pre-line;
  word-wrap: break-word;
  color: ${colorMap('black')};
  ${CommonStyle};

  ${breakpoint.ltSm`
    font-size: 1.4rem;
  `};
`;

const Label = styled.label`
  font-size: 1.6rem;
  ${props => props.fontSize && `
    font-size: ${(props.fontSize) / 10}rem;
  `};
  ${CommonStyle};

  ${breakpoint.ltSm`
    font-size: 1.4rem;
  `};
`;

const Span = styled.span`
  font-size: 1.2rem;
  color: ${colorMap('black')};
  ${CommonStyle};
`;

const Anchor = styled.a`
  font-size: 1.6rem;
  color: ${colorMap('primary')};
  ${CommonStyle};
  ${props => props.hoverColor && `
    &:hover {
      color: ${colorMap(props.hoverColor)};
    }
  `};
  ${props => props.activeColor && `
    &:hover {
      color: ${colorMap(props.activeColor)};
    }
  `};
`;

export {
  Span,
  AugH1,
  AugH2,
  AugH3,
  AugH4,
  AugH5,
  Label,
  Anchor,
  AugPara,
};
