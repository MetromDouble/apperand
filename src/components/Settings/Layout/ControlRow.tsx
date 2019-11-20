import styled from 'styled-components';

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default ControlRow;
