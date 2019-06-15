import React from 'react';
import styled from 'styled-components';

import { CalendarChunk } from './CalendarChunk';

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
`;

const List = styled.div`
  width: 100%;
  height: 640000px;
`;

interface ICalendarScrollContainerProps { }

export const CalendarScrollContainer = React.memo<
  ICalendarScrollContainerProps
>(
  () => {
    return (
      <Container>
        <List>
          <CalendarChunk />
        </List>
      </Container>
    );
  }
);
