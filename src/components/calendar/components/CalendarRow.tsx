import React from 'react';
import styled from 'styled-components';

import { CalendarCell } from './CalendarCell';

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ICalendarRowProps { }

export const CalendarRow = React.memo<ICalendarRowProps>(() => {
  return (
    <Row>
      {new Array(7).fill('11').map(() => (
        <CalendarCell />
      ))}
    </Row>
  );
});
