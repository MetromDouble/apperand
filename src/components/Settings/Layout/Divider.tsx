import styled from 'styled-components';

const Divider = styled.div`
  position: relative;
  margin-left: -8px;
  width: calc(100% + 16px);
  border-bottom: 1px solid ${props => props.theme.palette.gs10};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default Divider;
