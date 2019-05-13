import React from 'react';
import styled from 'styled-components';

const BreadcrumbsWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: ${props => props.theme.palette.wetPaper};
`;

export const Breadcrumbs = () => {
  return (
    <BreadcrumbsWrapper>
    </BreadcrumbsWrapper>
  );
};
