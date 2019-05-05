import React, { useState } from 'react';
import styled from 'styled-components';

import img from 'src/assets/images/factorio/cpu.png';

const CanvasWrapper = styled.div`
  width: 800px;
  height: 400px;
  position: absolute;
  top: 100px;
  left: 100px;
  border: 1px solid black;
  overflow: hidden;
`;

const Canvas = styled.div`
  width: 2000px;
  height: 2000px;
  /* background: linear-gradient(135deg, #000000 0%, #ffffff 22%, #207cca 38%, #7db9e8 100%); */
  background-image: url(${img.toString()});
`;

interface IHTMLCanvasProps {
}

export const HTMLCanvas: React.FC<IHTMLCanvasProps> = () => {
  const [coords, setCoords] = useState<any>(null);

  const startTranslate = (ev: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = ev.currentTarget;
    const newWrapperRect = wrapper.getBoundingClientRect();

    setCoords({
      x1: Math.round(ev.clientX - newWrapperRect.left),
      y1: Math.round(ev.clientY - newWrapperRect.top),
      x2: Math.round(ev.clientX - newWrapperRect.left),
      y2: Math.round(ev.clientY - newWrapperRect.top),
      scrollLeft: wrapper.scrollLeft,
      scrollTop: wrapper.scrollTop,
    });
  };

  const updateTranslate = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (coords) {
      const wrapper = ev.currentTarget;
      const newWrapperRect = wrapper.getBoundingClientRect();
      const newCoords = {
        ...coords,
        x2: Math.round(ev.clientX - newWrapperRect.left),
        y2: Math.round(ev.clientY - newWrapperRect.top)
      };

      requestAnimationFrame(() => {
        wrapper.scroll(
          Math.max(0, newCoords.scrollLeft + newCoords.x1 - newCoords.x2),
          Math.max(0, newCoords.scrollTop + newCoords.y1 - newCoords.y2)
        );
      });

      setCoords(newCoords);
    }
  };

  const finishTranslate = () => {
    setCoords(null);
  };

  return (
    <CanvasWrapper
      onPointerDown={startTranslate}
      onPointerMove={updateTranslate}
      onPointerUp={finishTranslate}
    >
      <Canvas />
    </CanvasWrapper>
  );
};
