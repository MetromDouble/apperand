import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import cn from 'classnames';

const BreadcrumbsItemWrapper = styled.div`
  font-size: 13px;
  height: 32px;
  line-height: 28px;
  color: ${props => props.theme.palette.gs70};
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-items: center;
  background: ${props => props.theme.palette.gs20};
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: -12px;
  position: relative;
  &.active {
    color: ${props => props.theme.palette.maxLight};
    background: ${props => props.theme.palette.gs70};
    &:hover {
      background: ${props => props.theme.palette.gs80};
    }
  }
  &:hover {
    background: ${props => props.theme.palette.gs30};
  }
  &:first-child {
    padding-left: 8px;
    margin-left: 8px;
    svg.tail {
      display: none;
    }
  }
  svg.tail {
    position: absolute;
    left: 0;
    top: 0;
    width: 11px;
    height: 32px;
  }
  svg.head {
    position: absolute;
    top: 0;
    right: 0;
    width: 11px;
    height: 32px;
  }
`;

interface IBreadcrumbsItemProps {
  active?: boolean;
}

export const BreadcrumbsItem: React.FC<IBreadcrumbsItemProps> = ({ active, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <BreadcrumbsItemWrapper className={cn({active})}>
      <svg viewBox="0 0 11 32" width="11" height="32" className="tail">
        <path d="M0 0h-1v32h1l9-16L0 0z" fill={theme.palette.gs10} />
      </svg>
      {children}
      <svg viewBox="0 0 11 32" width="11" height="32" className="head">
        <path d="M0 0v-1h12v34H0v-1l9-16L0 0z" fill={theme.palette.gs10} />
      </svg>
    </BreadcrumbsItemWrapper>
  );
};
