import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const BreadcrumbsItemWrapper = styled.div`
  height: 28px;
  line-height: 28px;
  display: block;
  justify-items: center;
  background: ${props => props.theme.palette.wetPaper};
  border-top: 2px solid ${props => props.theme.palette.asphalt};
  border-bottom: 2px solid ${props => props.theme.palette.asphalt};
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
  svg {
    color: ${props => props.theme.palette.wetPaper};
    position: absolute;
    top: -2px;
    width: 16px;
    height: 32px;
  }
  svg.tail {
    left: -15px;
  }
  svg.head {
    right: -15px;
  }
`;

export const BreadcrumbsItem: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <BreadcrumbsItemWrapper>
      <svg viewBox="0 0 16 32" width="16" height="32" className="tail">
        <polygon fill="currentColor" points="3,2 11,16 3,30 16,30 16,16 16,14 16,2"/>
        <polygon fill={theme.palette.asphalt} points="16,0 0,0 0,2 8,16 0,30 0,32 16,32 16,30 3,30 11,16 3,2 16,2"/>
      </svg>
      {children}
      <svg viewBox="0 0 16 32" width="16" height="32" className="head">
        <polygon fill="currentColor" points="0,0.9 9,16 0,30.9" />
        <polygon fill={theme.palette.asphalt} points="0,0 0,2 8,16 0,30 0,32 2,32 11,16 2,0" />
      </svg>
    </BreadcrumbsItemWrapper>
  );
};
