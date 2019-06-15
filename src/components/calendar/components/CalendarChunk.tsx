import React from 'react';
import styled from 'styled-components';

import { CalendarRow } from './CalendarRow';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 20px 0;
`;

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 15px;
  font-size: 500;
`;

interface ICalendarChunkProps { }

export const CalendarChunk = React.memo<ICalendarChunkProps>(
  () => {
    return (
      <Wrapper>
        <Title>June</Title>
        {new Array(6).fill('11').map(() => (
          <CalendarRow />
        ))}
      </Wrapper>
    );
  }
);
