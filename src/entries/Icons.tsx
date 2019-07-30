import React from 'react';
import { Button } from 'src/components/Button/Button';

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
      <IconsExpo />
    </>
  );
};
