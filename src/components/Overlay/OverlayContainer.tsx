import styled from 'styled-components';

interface IOverlayContainerProps {
  initialZIndex?: number;
}
const OverlayContainer = styled.div<IOverlayContainerProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => props.initialZIndex ? props.initialZIndex : 1000};
`;

export default OverlayContainer;
