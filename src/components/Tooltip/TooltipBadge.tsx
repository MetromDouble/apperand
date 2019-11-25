import styled from 'styled-components';

type PopoverOrigin =
  'center'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'left-top'
  | 'left-center'
  | 'left-bottom';

interface ITooltipBadgeProps {
  origin?: PopoverOrigin;
}
const TooltipBadge = styled.div<ITooltipBadgeProps>`
  pointer-events: none;
  position: absolute;
  font-size: 14px;
  color: ${props => props.theme.palette.maxLight};
  background-color: ${props => props.theme.palette.primary};
  padding: 4px 8px;
  max-width: 240px;
  z-index: 1000;
  top: 100px;
  left: 100px;

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
      if (!origin) origin = 'top-center';

      const [first, second] = origin.split('-');
      const borderColor = props.theme.palette.primary;
      let top = '';
      let right = '';
      let bottom = '';
      let left = '';
      let shift = '-15px';

      if (second === 'top') {
        top = `top: 0; border-width: 4.4px; border-top-color: ${borderColor};`;
        shift = '-7px';
      }
      if (second === 'right') {
        right = `right: 0; border-width: 4.4px; border-right-color: ${borderColor};`;
        shift = '-7px';
      }
      if (second === 'bottom') {
        bottom = `bottom: 0; border-width: 4.4px; border-bottom-color: ${borderColor};`;
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
      if (second === 'center' && (first === 'right' || first === 'left')) {
        top = 'top: calc(50% - 8px);';
      }
      if (second === 'center' && (first === 'top' || first === 'bottom')) {
        left = 'left: calc(50% - 8px);';
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

export default TooltipBadge;
