import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  height: 100%;
  width: auto;
  display: block;
  box-sizing: border-box;
  font-size: 14px;
  padding: 4px 6px;
  background: #eee;
  color: #888;
  &:hover {
    background: #ddd;
    color: #333;
  }
  &:active {
    transform: translate(1px, 1px);
    outline: none !important;
  }
  &:focus {
    outline: none !important;
  }
  &:disabled {
    color: #fff;
    pointer-events: none;
  }
`;
