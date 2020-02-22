import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const CursorWaitIcon: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
<g>
	<polygon points="8,6 10,4 6,4 	"/>
	<path d="M13,5V1.5H3V5c1.7,0,3,1.3,3,3s-1.3,3-3,3v3.5h10V11c-1.7,0-3-1.3-3-3S11.3,5,13,5z M9,8c0,1.9,1.3,3.4,3,3.9v0.6h-2l-2-2
		l-2,2H4v-0.6c1.7-0.4,3-2,3-3.9S5.7,4.6,4,4.1V3h8v1.1C10.3,4.6,9,6.1,9,8z"/>
</g>


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
