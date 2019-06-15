import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
`;

interface ICalendarCellProps { }

export const CalendarCell = React.memo<ICalendarCellProps>(
  () => {
    return <Cell>11</Cell>;
  }
);
