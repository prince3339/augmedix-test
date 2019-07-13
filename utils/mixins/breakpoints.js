import { css } from 'styled-components';
import breakpointSizes from 'utils/settings/breakpoints';

// Iterate through the sizes and create a media template
const media = Object.keys(breakpointSizes).reduce((acc, label) => {
  const pxSize = breakpointSizes[label];
  acc[label] = (...args) => {
    if (
      label === 'gtXs'
      || label === 'sm'
      || label === 'md'
      || label === 'lg'
      || label === 'gtMac'
      || label === 'desktop'
      || label === 'xl') {
      return css`
        @media (min-width: ${pxSize}px) {
          ${css(...args)}
        }
      `;
    }

    if (
      label === 'xs'
      || label === 'mac'
      || label === 'ltSm'
      || label === 'ltMd'
      || label === 'ltLg'
      || label === 'ltXl'
      || label === 'mdTab') {
      return css`
        @media (max-width: ${pxSize}px) {
          ${css(...args)}
        }
      `;
    }

    if (label === 'ipadPortrait') {
      return css`
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
          ${css(...args)}
        }
      `;
    }

    if (label === 'ipadLandscape') {
      return css`
        @media (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
          ${css(...args)}
        }
      `;
    }

    return css`
      @media (min-device-width: 375px) {
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});

export default media;
