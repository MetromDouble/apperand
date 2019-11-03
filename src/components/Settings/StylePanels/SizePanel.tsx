import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';

interface ISizePanelProps {
}
export const SizePanel = React.memo<ISizePanelProps>(
  ({

  }) => {
    return (
      <Expander title="Size">
        111
      </Expander>
    );
  }
);
