import React, { useState, useRef, useEffect } from 'react';
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
    const [currentScroll, setCurrentScroll] = useState(0);
    const [heightStack, setHeightStack] = useState<{ [key: string]: number }>({});
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(
      () => {
        const container = containerRef.current;

        if (container) {
          container.scrollTop = (container.scrollHeight / 2) - (container.offsetHeight / 2);
          setCurrentScroll(container.scrollTop);
        }
      },
      [containerRef]
    );

    const handleScroll = (ev: React.SyntheticEvent<HTMLDivElement>) => {
      setCurrentScroll(ev.currentTarget.scrollTop);
      // console.log('FFF', heightStack);
    };

    return (
      <Container ref={containerRef} onScroll={handleScroll}>
        <List>
          {new Array(5).fill('s').map((item, index) => (
            <CalendarChunk
              key={`${item}${index}`}
              id={`${item}${index}`}
              currentScroll={currentScroll}
              heightStack={heightStack}
              setHeightStack={setHeightStack}
            />
          ))}
        </List>
      </Container>
    );
  }
);
