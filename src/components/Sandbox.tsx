import React, { useState, useRef, SyntheticEvent, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

const SandboxContainer = styled.div`
  display: grid;
  height: 100%;
`;

interface IPropsDragLine {
  area: Array<string>;
  'data-pos': string;
}
const DragLine = styled.div<IPropsDragLine>`
  display: block;

  grid-area: ${props => props.area.join(' / ')};
  cursor: ${props =>
    (props['data-pos'] === 'left' || props['data-pos'] === 'right') && 'col-resize'
    || (props['data-pos'] === 'top' || props['data-pos'] === 'bottom') && 'row-resize'
    || 'default'
  };
  background: #eee;
`;

const Slot = styled.div`
  grid-area: r_l1_end / c_l1_end / r_l2_begin / c_l2_begin;
  overflow: hidden;
`;

interface IPropsSandbox {
  children: ReactNode;
}
interface IStateSandbox {
  width: number;
  height: number;
  isMoving: boolean;
  pos: string | null;
}
export const Sandbox = ({ children }: IPropsSandbox) => {
  const [dragState, setDragState] = useState({
    width: 400,
    height: 100,
    isMoving: false,
    pos: null
  } as IStateSandbox);

  const handleMouseDown = (ev: SyntheticEvent) => {
    ev.preventDefault();
    setDragState({
      ...dragState,
      isMoving: true,
      pos: ev.currentTarget.getAttribute('data-pos')
    });
  };

  const handleMouseUp = (ev: MouseEvent) => {
    ev.preventDefault();
    setDragState({
      ...dragState,
      isMoving: false,
      pos: null
    });
  };

  const _handleMouseMove = throttle((ev: MouseEvent) => {
    const sign = (
      dragState.pos === 'top' && -1
      || dragState.pos === 'bottom' && 1
      || dragState.pos === 'left' && -1
      || dragState.pos === 'right' && 1
      || 0
    );
    const orientation = (dragState.pos === 'top' || dragState.pos === 'bottom') ? 'horizontal' : 'vertical';

    dragState.isMoving && setDragState({
      ...dragState,
      height: orientation === 'horizontal' ? Math.max(dragState.height + sign * ev.movementY * 2, 4) : dragState.height,
      width: orientation === 'vertical' ? Math.max(dragState.width + sign * ev.movementX * 2, 4) : dragState.width
    });
  });
  const handleMouseMove = (ev: MouseEvent) => {
    ev.preventDefault();
    _handleMouseMove(ev);
  };

  return (
    <SandboxContainer
      style={{
        gridTemplateRows: `
          [r_begin] auto [r_l1_begin] 4px [r_l1_end]
          ${dragState.height}px
          [r_l2_begin] 4px [r_l2_end] auto [r_end]
        `,
        gridTemplateColumns: `
          [c_begin] auto [c_l1_begin] 4px [c_l1_end]
          ${dragState.width}px
          [c_l2_begin] 4px [c_l2_end] auto [c_end]
        `
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <DragLine
        area={['r_l1_begin', 'c_begin', 'r_l1_end', 'c_end']}
        data-pos="top"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <DragLine
        area={['r_begin', 'c_l1_begin', 'r_end', 'c_l1_end']}
        data-pos="left"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <DragLine
        area={['r_l2_begin', 'c_begin', 'r_l2_end', 'c_end']}
        data-pos="bottom"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <DragLine
        area={['r_begin', 'c_l2_begin', 'r_end', 'c_l2_end']}
        data-pos="right"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Slot>
        {children}
      </Slot>
      <span style={{ gridArea: 'r_l1_end / c_begin / r_l2_begin / c_l1_begin', justifySelf: 'end', alignSelf: 'start' }}>
        {dragState.width} {dragState.height}
      </span>
    </SandboxContainer>
  );
};
