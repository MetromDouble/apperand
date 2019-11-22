import React from 'react';
import styled from 'styled-components';

import ControlLabel from 'src/components/Settings/Layout/ControlLabel';
import ControlRow from 'src/components/Settings/Layout/ControlRow';
import ControlCol from 'src/components/Settings/Layout/ControlCol';
import Divider from 'src/components/Settings/Layout/Divider';
import UnitButton from 'src/components/Settings/Layout/UnitButton';
import MarkedText from 'src/components/Settings/Layout/MarkedText';
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
      <Expander title="Size" expanded>
        <ControlRow>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <MarkedText>
                  Width
                </MarkedText>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text">
                  <UnitButton type="default" size="xxs" borderless>
                    PX
                  </UnitButton>
                </Input>
              </ControlCol>
            </ControlLabel>
          </ControlCol>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <MarkedText>
                  Height
                </MarkedText>
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
                <MarkedText>
                  MinW
                </MarkedText>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" />
              </ControlCol>
            </ControlLabel>
          </ControlCol>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <MarkedText>
                  MinH
                </MarkedText>
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
                <MarkedText>
                  MaxW
                </MarkedText>
              </ControlCol>
              <ControlCol basis="160px">
                <Input size="xs" type="text" />
              </ControlCol>
            </ControlLabel>
          </ControlCol>
          <ControlCol>
            <ControlLabel>
              <ControlCol>
                <MarkedText>
                  MaxH
                </MarkedText>
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
