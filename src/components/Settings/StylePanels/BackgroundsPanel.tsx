import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';

interface IBackgroundsPanelProps {
}
export const BackgroundsPanel = React.memo<IBackgroundsPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Backgrounds">
        111
      </Expander>
    );
  }
);
