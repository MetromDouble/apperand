import React, { useState } from 'react';
import styled from 'styled-components';

const SandboxDiv = styled.div`
  position: relative;
  margin-top: 200px;
  margin-left: 200px;
  background: #eee;
  width: 400px;
  height: 400px;
`;

interface IHTMLSandboxProps {
}

interface IItem {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const HTMLSandbox: React.FC<IHTMLSandboxProps> = () => {
  const [sandboxRect, setSandboxRect] = useState<any>(null);
  const [elements, setElements] = useState<any[]>([]);
  const [currentElement, setCurrentElement] = useState<IItem | null>(null);

  const startElement = (ev: React.MouseEvent<HTMLDivElement>) => {
    const key = makeid(6);
    const newSandboxRect = ev.currentTarget.getBoundingClientRect();
    const newElement = {
      key,
      x1: Math.round(ev.clientX - newSandboxRect.left),
      y1: Math.round(ev.clientY - newSandboxRect.top),
      x2: Math.round(ev.clientX - newSandboxRect.left),
      y2: Math.round(ev.clientY - newSandboxRect.top)
    };

    setSandboxRect(newSandboxRect);
    setElements([...elements, newElement]);
    setCurrentElement(newElement);
  }

  const resizeElement = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (currentElement) {
      const newElement = {
        ...currentElement,
        x2: Math.round(ev.clientX - sandboxRect.left),
        y2: Math.round(ev.clientY - sandboxRect.top)
      };

      setElements([
        ...elements.filter(element => element.key !== currentElement.key),
        newElement
      ]);
      setCurrentElement(newElement);
    }
  }

  const finishElement = () => {
    if (currentElement
      && (
        (currentElement.x1 - currentElement.x2) === 0
        || (currentElement.y1 - currentElement.y2) === 0
      )
    ) {
      setElements([
        ...elements.filter(element => element.key !== currentElement.key),
      ]);
    }

    setCurrentElement(null);
  }

  return (
    <SandboxDiv
      onPointerDown={startElement}
      onPointerMove={resizeElement}
      onPointerUp={finishElement}
    >
      {elements.map(element => (
        <div
          key={element.key}
          data-foo={element.key}
          style={{
            position: 'absolute',
            background: '#888',
            top: Math.min(element.y1, element.y2),
            left: Math.min(element.x1, element.x2),
            width: Math.abs(element.x1 - element.x2),
            height: Math.abs(element.y1 - element.y2)
          }}
        />
      ))}
    </SandboxDiv>
  );
};

function makeid(length: number) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
