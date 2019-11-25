import React from 'react';
import { Button } from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import Tooltip from 'src/components/Tooltip/Tooltip';

import { IconsExpo } from 'src/entries/IconsExpo';

export const Icons: React.FC = () => {
  return (
    <>
      <Tooltip trigger="hover" text="sdFGHJKDFGHJ sjbssjhdk sjdhsjhd sjdhshjd">
        <button>TESTEST</button>
      </Tooltip>
      <Button type="default" size="xxs" />
      <Button type="default" size="xs" />
      <Button type="primary" size="s" />
      <Button type="success" size="m" />
      <Button type="warning" size="l" />
      <Button type="danger" size="xl" />
      <Button type="clean" />
      <br/>
      <Input type="checkbox" size="xxs">
        Label
      </Input>
      <Input type="checkbox" size="xs">
        Label
      </Input>
      <Input type="checkbox" size="s">
        Label
      </Input>
      <Input type="checkbox" size="m">
        Label
      </Input>
      <Input type="checkbox" size="l">
        Label
      </Input>
      <Input type="checkbox" size="xl">
        Label
      </Input>
      <Input type="checkbox" size="xxl">
        Label
      </Input>

      <Input type="radio" size="xxs" />
      <Input type="radio" size="xs" />
      <Input type="radio" size="s" />
      <Input type="radio" size="m" />
      <Input type="radio" size="l" />
      <Input type="radio" size="xl" />

      <Input type="text" size="xxs" />
      <Input type="text" size="xs" />
      <Input type="text" size="s" />
      <Input type="text" size="m" />
      <Input type="text" size="l" />
      <Input type="text" size="xl" />
      <Input type="password" />
      <Input type="number" />
      <br/>
      <IconsExpo />
    </>
  );
};
