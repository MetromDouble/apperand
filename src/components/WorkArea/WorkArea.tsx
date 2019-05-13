import React from 'react';
import styled from 'styled-components';

import { HTMLCanvas } from 'src/components/HTMLCanvas/HTMLCanvas';

const WorkAreaWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const WorkArea = () => {
  return (
    <WorkAreaWrapper>
      <HTMLCanvas />
    </WorkAreaWrapper>
  );
};
