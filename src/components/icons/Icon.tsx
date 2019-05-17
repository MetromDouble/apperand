import React from 'react';
import styled from 'styled-components';
import { iconWidthMap, IconSizes } from 'src/utils/uikit'

export interface IIconProps {
  size?: IconSizes;
  fill?: string;
  onlyPath?: boolean;
  className?: string;
}
export interface IComboIconProps<T> extends IIconProps {
  type?: T;
}
const IconWrapper = styled.i<IIconProps>`
  display: inline-flex;
  align-items: center;
  width: ${props => `${props.size && iconWidthMap[props.size] ? iconWidthMap[props.size] : iconWidthMap.m}px`};
  height: ${props => `${props.size && iconWidthMap[props.size] ? iconWidthMap[props.size] : iconWidthMap.m}px`};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon: React.FC<IIconProps> = ({ children, fill, className, ...props }) => (
  <IconWrapper className={className} {...props}>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill={fill || 'currentColor'}>
      {children}
    </svg>
  </IconWrapper>
);

export const NoIcon: React.FC = () => (
  <path d="M2 2h2v2H2zM6 2h2v2H6zM10 2h2v2h-2zM14 2h2v2h-2zM0 0h2v2H0zM4 0h2v2H4zM8 0h2v2H8zM12 0h2v2h-2zM0 4h2v2H0zM4 4h2v2H4zM8 4h2v2H8zM12 4h2v2h-2zM2 6h2v2H2zM6 6h2v2H6zM10 6h2v2h-2zM14 6h2v2h-2zM0 8h2v2H0zM4 8h2v2H4zM8 8h2v2H8zM12 8h2v2h-2zM2 10h2v2H2zM6 10h2v2H6zM10 10h2v2h-2zM14 10h2v2h-2zM0 12h2v2H0zM4 12h2v2H4zM8 12h2v2H8zM12 12h2v2h-2zM2 14h2v2H2zM6 14h2v2H6zM10 14h2v2h-2zM14 14h2v2h-2z" />
);
