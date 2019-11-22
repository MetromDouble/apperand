import styled from 'styled-components';

interface IControlColProps {
  basis?: string;
}
const ControlCol = styled.div<IControlColProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${props => props.basis ? `flex-basis: ${props.basis};` : ''}

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default ControlCol;
