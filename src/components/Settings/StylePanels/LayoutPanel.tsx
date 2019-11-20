import React from 'react';
import styled from 'styled-components';

import { Expander } from 'src/components/Expander/Expander';
import { ButtonGroup } from 'src/components/ButtonGroup/ButtonGroup';
import { Button } from 'src/components/Button/Button';

import { DisplayBlockIcon } from 'src/components/icons/DisplayBlockIcon';
import { DisplayFlexIcon } from 'src/components/icons/DisplayFlexIcon';
import { DisplayGridIcon } from 'src/components/icons/DisplayGridIcon';
import { DisplayInlineBlockIcon } from 'src/components/icons/DisplayInlineBlockIcon';
import { DisplayInlineIcon } from 'src/components/icons/DisplayInlineIcon';

interface ILayoutPanelProps {
}
export const LayoutPanel = React.memo<ILayoutPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Layout">
        <ButtonGroup>
          <Button type="default" size="xs">
            <DisplayBlockIcon size="xs" />
          </Button>
          <Button type="default" size="xs">
            <DisplayFlexIcon size="xs" />
          </Button>
          <Button type="default" size="xs">
            <DisplayGridIcon size="xs" />
          </Button>
          <Button type="default" size="xs">
            <DisplayInlineBlockIcon size="xs" />
          </Button>
          <Button type="default" size="xs" selected>
            <DisplayInlineIcon size="xs" />
          </Button>
        </ButtonGroup>
      </Expander>
    );
  }
);
