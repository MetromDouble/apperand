import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

import { Button } from 'src/components/Button/Button';
import { HeaderButton } from 'src/components/HeaderButton/HeaderButton';

const HeaderWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  background: ${({ theme: { palette } }) => palette.wetAsphalt};
`;

const HeaderCenterSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background: ${({ theme: { palette } }) => palette.wetAsphalt};
`;

const ProjectTitlePrefix = styled.span`
  color: ${({ theme: { palette } }) => palette.iron};
`;

const ProjectTitle = styled.span`
  color: ${({ theme: { palette } }) => palette.maxLight};
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
        <HeaderCenterSection>
          <ProjectTitle>
            <ProjectTitlePrefix>Projects /</ProjectTitlePrefix> ProjectName
          </ProjectTitle>
        </HeaderCenterSection>
        <HeaderButton>
          Fffff
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
