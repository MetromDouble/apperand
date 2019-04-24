import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

import { Button } from 'src/components/Button/Button';
import { HeaderButton } from 'src/components/HeaderButton/HeaderButton';

const HeaderWrapper = styled.div`
  height: 40px;
  width: 100%;
  background: ${({ theme: { palette } }) => palette.wetAsphalt};
`;

interface IHeaderProps {
}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderButton>
          <MenuIcon />
        </HeaderButton>
      </HeaderWrapper>
        <Button type="default" size="xxs" />
        <Button type="default" size="xs" />
        <Button type="primary" size="s" />
        <Button type="success" size="m" />
        <Button type="warning" size="l" />
        <Button type="danger" size="xl" />
        <Button type="clean" />
    </>
  );
};
