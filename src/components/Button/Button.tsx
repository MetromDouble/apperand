import styled from 'styled-components';

import {
  ButtonTypes,
  ButtonSizes,
  btnColorMap,
  sizeMap
} from 'src/utils/uikit';

interface IButtonProps {
  type?: ButtonTypes;
  size?: ButtonSizes;
}

export const Button = styled.button<IButtonProps>`
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
  outline: none;
  padding: 0 ${props => {
    const sizeObject = props.size && sizeMap[props.size];

    return sizeObject
      ? sizeObject.paddingHorizontal
      : sizeMap.m.paddingHorizontal
  }};
  font: inherit;
  font-size: ${props => {
    const sizeObject = props.size && sizeMap[props.size];

    return sizeObject
      ? sizeObject.fontSize
      : sizeMap.m.fontSize
  }};
  line-height: ${props => {
    const sizeObject = props.size && sizeMap[props.size];

    return sizeObject
      ? sizeObject.fontSize
      : sizeMap.m.fontSize
  }};
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  transition: color .2s ease-out, background-color .2s ease-out, border-color .2s ease-out, transform .2s ease-out;
  height: ${props => {
    const sizeObject = props.size && sizeMap[props.size];

    return sizeObject
      ? sizeObject.height
      : sizeMap.m.height
  }};
  color: ${props => {
    const subMap = props.type && btnColorMap[props.type];

    return subMap
      ? subMap.default.color
      : ''
  }};
  background-color: ${props => {
    const subMap = props.type && btnColorMap[props.type];

    return subMap
      ? subMap.default.background
      : 'transparent'
  }};
  border-color: ${props => {
    const subMap = props.type && btnColorMap[props.type];

    return subMap
      ? subMap.default.border
      : 'transparent'
  }};

  &:focus, &:hover {
    color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.hover.color
        : ''
    }};
    background-color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.hover.background
        : 'transparent'
    }};
    border-color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.hover.border
        : 'transparent'
    }};
  }

  &:active {
    color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.active.color
        : ''
    }};
    background-color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.active.background
        : 'transparent'
    }};
    border-color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.active.border
        : 'transparent'
    }};
  }

  &:disabled {
    color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.disabled.color
        : ''
    }};
    background-color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.disabled.background
        : 'transparent'
    }};
    border-color: ${props => {
      const subMap = props.type && btnColorMap[props.type];

      return subMap
        ? subMap.disabled.border
        : 'transparent'
    }};
  }
`;
