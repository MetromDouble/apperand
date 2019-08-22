import React from 'react';

import { InputField } from './components/InputField';
import { InputWrapper } from './components/InputWrapper';
import {
  Sizes
} from 'src/utils/uikit';

interface IInputProps {
  size?: Sizes;
}

export const Input = React.memo<IInputProps>(
  ({
    size
  }) => {
    return (
      <InputWrapper
        size={size || 'm'}
      >
        <InputField
          sz={size || 'm'}
        />
      </InputWrapper>
    );
  }
);
