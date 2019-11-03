import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';

interface IEffectsPanelProps {
}
export const EffectsPanel = React.memo<IEffectsPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Effects">
        111
      </Expander>
    );
  }
);
