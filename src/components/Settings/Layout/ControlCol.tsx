import styled from 'styled-components';

interface IControlColProps {
  grow?: string | number;
  shrink?: string | number;
  basis?: string;
}
const ControlCol = styled.div<IControlColProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${props => props.grow ? `flex-grow: ${props.grow};` : ''}
  ${props => props.shrink ? `flex-shrink: ${props.shrink};` : ''}
  ${props => props.basis ? `flex-basis: ${props.basis};` : ''}

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default ControlCol;
