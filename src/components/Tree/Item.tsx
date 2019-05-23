import React from 'react';
import styled from 'styled-components';

import { ItemWrapper } from 'src/components/Tree/ItemWrapper';
import { ItemHead } from 'src/components/Tree/ItemHead';
import { ItemTitle } from 'src/components/Tree/ItemTitle';
import { TriangleArrowComboIcon } from 'src/components/icons/TriangleArrowComboIcon';

interface ITriangleArrow {
  expanded?: boolean;
}
const TriangleArrow = styled(TriangleArrowComboIcon)<ITriangleArrow>`
  transform: ${props => props.expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
  transition: transform 0.2s ease;
`;

interface IItemProps {
  title: string;
  icons?: React.ReactNode;
  expanded?: boolean;
  active?: boolean;
}
export const Item: React.FC<IItemProps> = (props) => {
  const {
    children,
    title,
    icons,
    active,
    expanded
  } = props;
  return (
    <ItemWrapper expanded={expanded}>
      <ItemHead active={active}>
        {!!children && <TriangleArrow expanded={expanded} size="xxs" type="s" />}
        {icons}
        <ItemTitle>
          {title}
        </ItemTitle>
      </ItemHead>
      {children}
    </ItemWrapper>
  );
};
