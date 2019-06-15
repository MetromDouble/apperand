import React from 'react';
import styled from 'styled-components';

import { CalendarScrollColumnItem } from './CalendarScrollColumnItem';

const Column = styled.div`
  width: 120px;
  height: 420px;
  padding: 8px 0 8px;
  box-sizing: border-box;
  background-color: #f0f0f0;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 32px;
    width: 3px;
    background-color: #e64545;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const List = styled.div`
  height: 64000px;
`;

interface ICalendarScrollColumnProps { }

export const CalendarScrollColumn = React.memo<ICalendarScrollColumnProps>(
  () => {
    return (
      <Column>
        <List>
          {new Array(18).fill('month').map(item => (
            <CalendarScrollColumnItem>
              {item}
            </CalendarScrollColumnItem>
          ))}
        </List>
      </Column>
    );
  }
);
