import React from 'react';
import { Sandbox } from 'src/components/Sandbox';
import { Grid } from 'src/components/Grid';

export const Main = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Sandbox>
        <Sandbox>
          111
        </Sandbox>
      </Sandbox>
    </div>
  );
};
