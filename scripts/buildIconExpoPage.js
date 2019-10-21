const fs = require('fs');
const path = require('path');
const inputPath = path.join(__dirname, '../src/components/icons');
const outputPath = path.join(__dirname, '../src/entries/IconsExpo.tsx');

const nameArray = fs.readdirSync(inputPath);

const result = `import React from 'react';

import { Sizes } from 'src/common/types/Sizes';
${
  nameArray.map((filename) => {
    const componentName = filename.replace(/(\.tsx)/gm, '');

    return `import { ${componentName} } from 'src/components/icons/${componentName}';`
  }).join('\n')
}

export const IconsExpo: React.FC = () => {
  return (
    <>
      {(['xxs', 'xs', 's', 'm', 'l', 'xl'] as Sizes[]).map((size) => (
        <>
${
  nameArray.map((filename, index) => {
    const componentName = filename.replace(/(\.tsx)/gm, '');

    return `${index % 20 === 0 ? '          <br />\n' : ''}          <${componentName} size={size} />`
  }).join('\n')
}
        </>
      ))}
    </>
  );
};
`;

try {
  fs.unlinkSync(outputPath);
} catch (error) {
  console.log('Created');
}
fs.writeFileSync(outputPath, result)
