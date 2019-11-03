import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';

interface ITypographyPanelProps {
}
export const TypographyPanel = React.memo<ITypographyPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Typography">
        111
      </Expander>
    );
  }
);
