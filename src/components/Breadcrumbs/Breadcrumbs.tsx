import React from 'react';
import styled from 'styled-components';

import { BreadcrumbsItem } from 'src/components/Breadcrumbs/BreadcrumbsItem';

import { FolderIcon } from 'src/components/icons/FolderIcon';

const BreadcrumbsWrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${props => props.theme.palette.wetPaper};
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.palette.steel};
  padding-top: 3px;
`;

const MarginIcon = styled.div`
  display: inline-flex;
  margin-right: 4px;
`;

export const Breadcrumbs = () => {
  return (
    <BreadcrumbsWrapper>
      <BreadcrumbsItem active>
        <MarginIcon>
          <FolderIcon size="xs" />
        </MarginIcon>
        Root
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        <MarginIcon>
          <FolderIcon size="xs" />
        </MarginIcon>
        Sub
      </BreadcrumbsItem>
      <BreadcrumbsItem>
        <MarginIcon>
          <FolderIcon size="xs" />
        </MarginIcon>
        Sub
      </BreadcrumbsItem>
    </BreadcrumbsWrapper>
  );
};
