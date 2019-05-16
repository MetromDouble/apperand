import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const BreadcrumbsItemWrapper = styled.div`
  height: 32px;
  box-sizing: border-box;
  line-height: 28px;
  color: ${props => props.theme.palette.asphalt};
  cursor: pointer;
  user-select: none;
  display: block;
  justify-items: center;
  background: ${props => props.theme.palette.wetPaper};
  border-top: 2px solid ${props => props.theme.palette.asphalt};
  border-bottom: 2px solid ${props => props.theme.palette.asphalt};
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: -4px;
  position: relative;
  &:hover {
    background: ${props => props.theme.palette.maxLight};
  }
  svg {
    color: ${props => props.theme.palette.asphalt};
    position: absolute;
  }
  svg.tail {
    left: 0;
    top: -2px;
    width: 11px;
    height: 32px;
  }
  svg.head {
    top: -2px;
    right: 0;
    width: 11px;
    height: 32px;
  }
`;

export const BreadcrumbsItem: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <BreadcrumbsItemWrapper>
      <svg viewBox="0 0 11 32" width="11" height="32" className="tail">
        <path d="M0,0v32l9-16L0,0z" fill={theme.palette.wetPaper} />
        <path d="M-1.1,0l9,16l-9,16h2.5l9-16l-9-16H-1.1z" fill="currentColor" />
      </svg>
      {children}
      <svg viewBox="0 0 11 32" width="11" height="32" className="head">
        <path d="M0 0v-1h12v34H0v-1l9-16L0 0z" fill={theme.palette.wetPaper} />
        <path d="M-1 0l9 16-9 16h2.5l9-16-9-16H-1z" fill="currentColor" />
      </svg>
    </BreadcrumbsItemWrapper>
  );
};
