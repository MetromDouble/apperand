import React, { useState, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { TriangleArrowSIcon } from 'src/components/icons/TriangleArrowSIcon';

interface IExpanderProps {
  children?: ReactNode;
  title: ReactNode;
}
export const Expander = React.memo<IExpanderProps>(
  ({
    title,
    children,
  }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      setVisible(oldVisible => !oldVisible);
    };

    return (
      <Wrapper>
        <Title onClick={toggleVisible}>
          <TriangleArrow expanded={visible} size="xxs" />
          {title}
        </Title>
        <Hideable visible={visible}>
          {children}
        </Hideable>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  width: 100%;
`;

interface ITriangleArrow {
  expanded?: boolean;
}
const TriangleArrow = styled(TriangleArrowSIcon)<ITriangleArrow>`
  transform: ${props => props.expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: transform 0.1s ease;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  min-height: 32px;
  background-color: ${props => props.theme.palette.gs10};
  color: ${props => props.theme.palette.gs60};
  padding: 0 4px;
  cursor: pointer;
  user-select: none;
`;

interface IHideableProps {
  visible: boolean;
}
const Hideable = styled.div<IHideableProps>`
  display: ${props => props.visible ? 'block' : 'none'};
`;
