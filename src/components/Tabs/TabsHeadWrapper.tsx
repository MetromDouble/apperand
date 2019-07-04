import styled from 'styled-components';

export const TabsHeadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 32px;
  background: ${props => props.theme.palette.steel};
  color: ${props => props.theme.palette.asphalt};
`;
