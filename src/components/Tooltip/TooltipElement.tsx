import React, { useContext, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import { PopoverOrigin } from 'src/common/types/Overlay';

const converter = (defaultOrigin: PopoverOrigin, target?: HTMLElement | null, tooltip?: HTMLDivElement) => {
  if (!target || !tooltip) return;

  const ARROW_MARGIN = 8;
  const EDGE_MARGIN = 8;
  const { width, height } = tooltip.getBoundingClientRect();
  const { width: targetWidth, height: targetHeight, top, left } = target.getBoundingClientRect();

  const topSpace = top;
  const rightSpace = window.innerWidth - left - targetWidth;
  const bottomSpace = window.innerHeight - top - targetHeight;
  const leftSpace = left;

  const isPlaceable = {
    'center': () => true,
    'top-left': () => (height + ARROW_MARGIN < topSpace) && (width - EDGE_MARGIN < leftSpace),
    'top-center': () => (height + ARROW_MARGIN < topSpace),
    'top-right': () => (height + ARROW_MARGIN < topSpace) && (width - EDGE_MARGIN < rightSpace),
    'right': () => (width + ARROW_MARGIN < rightSpace),
    'bottom-left': () => (height + ARROW_MARGIN < bottomSpace) && (width - EDGE_MARGIN < leftSpace),
    'bottom-center': () => (height + ARROW_MARGIN < bottomSpace),
    'bottom-right': () => (height + ARROW_MARGIN < bottomSpace) && (width - EDGE_MARGIN < rightSpace),
    'left': () => (width + ARROW_MARGIN < leftSpace),
  };
  console.log('GGGGGGG', topSpace, rightSpace, bottomSpace, leftSpace, isPlaceable[defaultOrigin]())
};

export interface ITooltipElementProps {
  triggerElement?: HTMLElement | null;
  origin?: PopoverOrigin;
}
const TooltipElement = React.memo<ITooltipElementProps>(
  ({
    triggerElement,
    origin = 'bottom-center',
    children,
  }) => {
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    if (triggerElement) {
      console.log('triggerElement', triggerElement.getBoundingClientRect());
    }

    useLayoutEffect(() => {
      if (tooltipRef.current) {
        console.log('tooltipRef', tooltipRef.current.getBoundingClientRect());
        converter(origin, triggerElement, tooltipRef.current)
      }
    }, []);

    return (
      <TooltipContainer origin={origin} ref={tooltipRef}>
        {children}
      </TooltipContainer>
    );
  }
);

export default TooltipElement;

interface ITooltipContainerProps {
  origin?: PopoverOrigin;
}
const TooltipContainer = styled.div<ITooltipContainerProps>`
  pointer-events: none;
  position: absolute;
  font-size: 14px;
  color: ${props => props.theme.palette.maxLight};
  background-color: ${props => props.theme.palette.primary};
  padding: 4px 4px;
  max-width: 240px;
  text-align: center;
  z-index: 1000;
  top: 100px;
  left: 100px;
  box-shadow: 1px 1px 6px rgba(0,0,0,0.3);

  &:before {
    content: '';
    position: absolute;
    display: ${props => props.origin === 'center' ? 'none' : 'block'};
    border-width: 8.4px;
    border-style: solid;
    border-color: transparent;

    ${props => {
      let origin = props.origin;
      if (origin === 'center') return '';
      if (!origin) origin = 'bottom-center';

      const [first, second] = origin.split('-');
      const borderColor = props.theme.palette.primary;
      let top = '';
      let right = '';
      let bottom = '';
      let left = '';
      let shift = '-15px';

      if (second === 'right') {
        right = `right: 0; border-width: 4.4px; border-right-color: ${borderColor};`;
        shift = '-7px';
      }
      if (second === 'left') {
        left = `left: 0; border-width: 4.4px; border-left-color: ${borderColor};`;
        shift = '-7px';
      }

      if (first === 'top') {
        top = `top: ${shift}; border-bottom-color: ${borderColor};`;
      }
      if (first === 'right') {
        right = `right: ${shift}; border-left-color: ${borderColor};`;
      }
      if (first === 'bottom') {
        bottom = `bottom: ${shift}; border-top-color: ${borderColor};`;
      }
      if (first === 'left') {
        left = `left: ${shift}; border-right-color: ${borderColor};`;
      }
      if (!!second && (first === 'right' || first === 'left')) {
        top = `top: calc(50% - 8.4px);`;
      }

      return `
        ${top}
        ${right}
        ${bottom}
        ${left}
      `;
    }}
  }
`;
