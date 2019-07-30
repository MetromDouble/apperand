import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const TagH1Icon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <path d="M7.915 4.458v8.046h-1.6V8.956h-2.13v3.548h-1.6V4.458h1.6V7.63h2.13V4.458h1.6zm3.354 6.72V6.68c-.243.174-.52.328-.832.462-.312.135-.577.24-.793.319l-.52-1.327a7.01 7.01 0 0 0 .676-.298c.243-.121.485-.256.728-.403.243-.148.472-.304.689-.468s.403-.334.56-.507h1.091v6.72h1.599v1.326H9.579v-1.326h1.69z"/>
    </>
  );

  return onlyPath
  ? path
  : (
    <Icon size={size} {...props}>
      {path}
    </Icon>
  );
};
