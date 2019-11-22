import styled from 'styled-components';

const ControlLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.theme.palette.gs60};
  font-size: 12px;
  user-select: none;
  padding-left: 4px;
  margin-left: -4px;
`;

export default ControlLabel;
