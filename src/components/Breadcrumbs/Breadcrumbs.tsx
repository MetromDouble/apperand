import React from 'react';
import styled from 'styled-components';

import { BreadcrumbsItem } from 'src/components/Breadcrumbs/BreadcrumbsItem';

const BreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: ${props => props.theme.palette.wetPaper};
`;

export const Breadcrumbs = () => {
  return (
    <BreadcrumbsWrapper>
      <BreadcrumbsItem>
        Root
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        Sub
      </BreadcrumbsItem>
    </BreadcrumbsWrapper>
  );
};
