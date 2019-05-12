import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 240px;
  height: 100%;
  background: ${({ theme: { palette } }) => palette.steel};
  color: ${({ theme: { palette } }) => palette.asphalt};
`;

interface ITreeProps {
}
export const Tree: React.FC<ITreeProps> = () => {
  return (
    <Wrapper>

    </Wrapper>
  );
};
