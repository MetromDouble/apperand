import React, { useRef } from 'react';
import styled from 'styled-components';

import ControlLabel from 'src/components/Settings/Layout/ControlLabel';
import ControlRow from 'src/components/Settings/Layout/ControlRow';
import ControlCol from 'src/components/Settings/Layout/ControlCol';
import Divider from 'src/components/Settings/Layout/Divider';
import InsideInputButton from 'src/components/Settings/Layout/InsideInputButton';
import LEDLabel from 'src/components/Settings/Layout/LEDLabel';
import { Expander } from 'src/components/Expander/Expander';
import Input from 'src/components/Input/Input';
import TriggerOverlay from 'src/components/Popover/TriggerOverlay';
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
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <Expander title="Size" expanded>
        <ControlRow>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <TriggerOverlay>
                  <LEDLabel>
                    Width
                  </LEDLabel>
                </TriggerOverlay>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text">
                  <InsideInputButton type="default" size="xxs" borderless onClick={onClick}>
                    PX
                  </InsideInputButton>
                </Input>
              </ControlCol>
            </ControlLabel>
          </ControlCol>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <LEDLabel>
                  Height
                </LEDLabel>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" ref={inputRef} />
              </ControlCol>
            </ControlLabel>
          </ControlCol>
        </ControlRow>
        <ControlRow>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <LEDLabel>
                  MinW
                </LEDLabel>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" />
              </ControlCol>
            </ControlLabel>
          </ControlCol>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <LEDLabel>
                  MinH
                </LEDLabel>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" />
              </ControlCol>
            </ControlLabel>
          </ControlCol>
        </ControlRow>
        <ControlRow>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <LEDLabel>
                  MaxW
                </LEDLabel>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" />
              </ControlCol>
            </ControlLabel>
          </ControlCol>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <LEDLabel>
                  MaxH
                </LEDLabel>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" />
              </ControlCol>
            </ControlLabel>
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
