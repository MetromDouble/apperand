import React from 'react';
import styled from 'styled-components';

import { Button } from 'src/components/Button/Button';

import { STIOIcon } from 'src/components/icons/STIOIcon';
import { PanelComboIcon } from 'src/components/icons/PanelComboIcon';

const HeaderWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  background: ${props => props.theme.palette.wetAsphalt};
`;

const HeaderButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  padding-left: 7px;
  padding-right: 7px;
  height: 100%;
  color: ${props => props.theme.palette.maxLight};
  &:hover {
    background: ${props => props.theme.palette.minLight};
    border-color: ${props => props.theme.palette.minLight};
  }
  &:active {
    background: ${props => props.theme.palette.primaryStrong};
    border-color: ${props => props.theme.palette.primaryStrong};
  }
`;

const HeaderCenterSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background: ${props => props.theme.palette.wetAsphalt};
`;

const ProjectTitlePrefix = styled.span`
  color: ${props => props.theme.palette.iron};
`;

const ProjectTitle = styled.span`
  color: ${props => props.theme.palette.maxLight};
`;

interface IHeaderProps {
}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderButton>
          <STIOIcon size="s" />
        </HeaderButton>
        <HeaderCenterSection>
          <ProjectTitle>
            <ProjectTitlePrefix>Projects /</ProjectTitlePrefix> ProjectName
          </ProjectTitle>
        </HeaderCenterSection>
        <HeaderButton>
          <PanelComboIcon size="s" type="close" />
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
