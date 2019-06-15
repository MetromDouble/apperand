import React from 'react';
import styled from 'styled-components';

import { CalendarScrollColumn } from './components/CalendarScrollColumn';
import { CalendarBar } from './components/CalendarBar';
import { CalendarCellTitles } from './components/CalendarCellTitles';
import { CalendarScrollContainer } from './components/CalendarScrollContainer';

const Root = styled.div`
  display: flex;
  width: 540px;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

interface ICalendarProps {
}

export const Calendar = React.memo<ICalendarProps>(
  () => {
    return (
      <Root>
        <CalendarScrollColumn />
        <MainArea>
          <CalendarBar />
          <CalendarCellTitles />
          <CalendarScrollContainer />
        </MainArea>
      </Root>
    );
  }
);
