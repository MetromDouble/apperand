import React from 'react';
import styled from 'styled-components';

import ControlLabel from 'src/components/Settings/Layout/ControlLabel';
import ControlRow from 'src/components/Settings/Layout/ControlRow';
import ControlCol from 'src/components/Settings/Layout/ControlCol';
import Divider from 'src/components/Settings/Layout/Divider';
import { Expander } from 'src/components/Expander/Expander';
import Input from 'src/components/Input/Input';
import { ButtonGroup } from 'src/components/ButtonGroup/ButtonGroup';
import { Button } from 'src/components/Button/Button';

import { EyeIcon } from 'src/components/icons/EyeIcon';
import { EyeNoneIcon } from 'src/components/icons/EyeNoneIcon';
import { OverflowScrollIcon } from 'src/components/icons/OverflowScrollIcon';

interface ISizePanelProps {
}
export const SizePanel = React.memo<ISizePanelProps>(
  ({

  }) => {
    return (
      <Expander title="Size">
        <ControlRow>
          <ControlCol>
            <ControlLabel>Width</ControlLabel>
            <Input size="xs" type="text" width="56px" />
          </ControlCol>
          <ControlCol>
            <ControlLabel>Height</ControlLabel>
            <Input size="xs" type="text" width="56px" />
          </ControlCol>
        </ControlRow>
        <ControlRow>
          <ControlCol>
            <ControlLabel>MinW</ControlLabel>
            <Input size="xs" type="text" width="56px" />
          </ControlCol>
          <ControlCol>
            <ControlLabel>MinH</ControlLabel>
            <Input size="xs" type="text" width="56px" />
          </ControlCol>
        </ControlRow>
        <ControlRow>
          <ControlCol>
            <ControlLabel>MaxW</ControlLabel>
            <Input size="xs" type="text" width="56px" />
          </ControlCol>
          <ControlCol>
            <ControlLabel>MaxH</ControlLabel>
            <Input size="xs" type="text" width="56px" />
          </ControlCol>
        </ControlRow>
        <Divider />
        <ControlRow>
          <ControlCol basis="35%">
            <ControlLabel>Overflow</ControlLabel>
          </ControlCol>
          <ControlCol basis="65%">
            <ButtonGroup>
              <Button type="default" size="xs">
                <EyeIcon size="xs" />
              </Button>
              <Button type="default" size="xs">
                <EyeNoneIcon size="xs" />
              </Button>
              <Button type="default" size="xs">
                <OverflowScrollIcon size="xs" />
              </Button>
              <Button type="default" size="xs">
                Auto
              </Button>
            </ButtonGroup>
          </ControlCol>
        </ControlRow>
      </Expander>
    );
  }
);
