import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';

interface ISpacingPanelProps {
}
export const SpacingPanel = React.memo<ISpacingPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Spacing">
        111
      </Expander>
    );
  }
);
