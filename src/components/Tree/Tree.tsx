import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 240px;
  height: 100%;
  background: ${props => props.theme.palette.steel};
  color: ${props => props.theme.palette.asphalt};
`;

interface ITreeProps {
}
export const Tree: React.FC<ITreeProps> = () => {
  return (
    <Wrapper>

    </Wrapper>
  );
};
