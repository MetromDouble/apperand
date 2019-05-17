import React from 'react';
import styled from 'styled-components';

import { BreadcrumbsItem } from 'src/components/Breadcrumbs/BreadcrumbsItem';

const BreadcrumbsWrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${props => props.theme.palette.wetPaper};
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.palette.steel};
  padding-top: 3px;
`;

export const Breadcrumbs = () => {
  return (
    <BreadcrumbsWrapper>
      <BreadcrumbsItem active>
        Root
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        Sub
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        Sub
      </BreadcrumbsItem>
    </BreadcrumbsWrapper>
  );
};
