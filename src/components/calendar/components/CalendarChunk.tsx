import React, { useState, useRef, useEffect } from 'react';
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

interface ICalendarChunkProps {
  id: string;
  currentScroll: number;
  heightStack: { [key: string]: number };
  setHeightStack: (stack: { [key: string]: number }) => void;
}

export const CalendarChunk = React.memo<ICalendarChunkProps>(
  ({
    id,
    currentScroll,
    heightStack,
    setHeightStack,
  }) => {
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(
      () => {
        const wrapper = wrapperRef.current;

        if (wrapper) {
          console.log('FFF', heightStack);
          setHeightStack({ ...heightStack, [id]: wrapper.offsetHeight });
        }
      },
      [wrapperRef]
    );

    // useEffect(
    //   () => {
    //     const wrapper = wrapperRef.current;

    //     if (wrapper) {
    //       wrapper.scrollTop = (wrapper.scrollHeight / 2) - (wrapper.offsetHeight / 2);
    //       setCurrentTranslate(wrapper.scrollTop);
    //     }
    //   },
    //   [currentScroll]
    // );

    return (
      <Wrapper ref={wrapperRef}>
        <Title>June</Title>
        {new Array(6).fill('11').map(() => (
          <CalendarRow />
        ))}
      </Wrapper>
    );
  }
);
