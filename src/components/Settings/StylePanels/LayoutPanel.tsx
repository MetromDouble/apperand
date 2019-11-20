import React from 'react';

import { Expander } from 'src/components/Expander/Expander';
import { ButtonGroup } from 'src/components/ButtonGroup/ButtonGroup';
import { Button } from 'src/components/Button/Button';
import ControlLabel from 'src/components/Settings/Layout/ControlLabel';
import ControlRow from 'src/components/Settings/Layout/ControlRow';
import ControlCol from 'src/components/Settings/Layout/ControlCol';

import { DisplayBlockIcon } from 'src/components/icons/DisplayBlockIcon';
import { DisplayFlexIcon } from 'src/components/icons/DisplayFlexIcon';
import { DisplayGridIcon } from 'src/components/icons/DisplayGridIcon';
import { DisplayInlineBlockIcon } from 'src/components/icons/DisplayInlineBlockIcon';
import { DisplayInlineIcon } from 'src/components/icons/DisplayInlineIcon';
import { NotAllowedIcon } from 'src/components/icons/NotAllowedIcon';

interface ILayoutPanelProps {
}
export const LayoutPanel = React.memo<ILayoutPanelProps>(
  ({

  }) => {
    return (
      <Expander title="Layout">
        <ControlRow>
          <ControlCol basis="20%">
            <ControlLabel>Display</ControlLabel>
          </ControlCol>
          <ControlCol basis="80%">
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
              <Button type="default" size="xs">
                <NotAllowedIcon size="xs" />
              </Button>
            </ButtonGroup>
          </ControlCol>
        </ControlRow>
      </Expander>
    );
  }
);
