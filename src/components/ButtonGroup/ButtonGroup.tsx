import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IButtonGroupProps {
  children?: ReactNode;
}
export const ButtonGroup = React.memo<IButtonGroupProps>(
  ({
    children,
  }) => {
    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;

  button {
    flex-grow: 1;
  }

  button:not(:last-child) {
    margin-right: -1px;
  }
`;
