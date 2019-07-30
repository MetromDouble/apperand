const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, '../src/assets/images/icons');
const outputPath = path.join(__dirname, '../src/components/icons');

fs.readdirSync(inputPath).forEach((filename) => {
  const file = fs.readFileSync(path.join(inputPath, filename), {encoding: 'utf8'});

  const result = `import React from 'react';
import { Icon, IIconProps } from 'src/components/Icon';

export const ${filename.replace(/(\.svg)/gm, '') + 'Icon'}: React.FC<IIconProps> = ({ size, onlyPath, ...props }) => {
  const path = (
    <>
      ${file.replace(/(<svg.*">)|(<\/svg>)/gm, '')}
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
`
  try {
    fs.readdirSync(outputPath)
  } catch (error) {
    fs.mkdirSync(outputPath)
  }

  const newFilename = path.join(outputPath, `${filename.replace(/(\.svg)/gm, '')}Icon.tsx`);

  try {
    fs.unlinkSync(newFilename);
  } catch (error) {
    console.log(`New file: ${newFilename}`);
  }
  fs.writeFileSync(newFilename, result)
});
