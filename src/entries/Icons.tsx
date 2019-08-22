import React from 'react';
import { Button } from 'src/components/Button/Button';
import { Input } from 'src/components/Input/Input';

import { IconsExpo } from 'src/entries/IconsExpo';

export const Icons: React.FC = () => {
  return (
    <>
      <Button type="default" size="xxs" />
      <Button type="default" size="xs" />
      <Button type="primary" size="s" />
      <Button type="success" size="m" />
      <Button type="warning" size="l" />
      <Button type="danger" size="xl" />
      <Button type="clean" />
      <br/>
      <Input size="xxs" />
      <br/>
      <Input size="xs" />
      <br/>
      <Input size="s" />
      <br/>
      <Input size="m" />
      <br/>
      <Input size="l" />
      <br/>
      <Input size="xl" />
      <br/>
      <IconsExpo />
    </>
  );
};
