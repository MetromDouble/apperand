import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';

interface IBordersPanelProps {
}
export const BordersPanel = React.memo<IBordersPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Borders">
        111
      </Expander>
    );
  }
);
