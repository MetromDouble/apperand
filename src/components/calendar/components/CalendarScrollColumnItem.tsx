import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  font-size: 13px;
  line-height: 16px;
  padding: 8px 20px 8px;
  box-sizing: border-box;
`;

interface ICalendarScrollColumnItemProps { }

export const CalendarScrollColumnItem = React.memo<
  ICalendarScrollColumnItemProps
>(
  ({ children }) => {
    return <Item>{children}</Item>;
  }
);
