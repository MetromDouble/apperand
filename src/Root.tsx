import React from 'react';
import { Route } from 'react-router-dom';
import { Main } from 'src/entries/Main';
import { Grid } from 'src/components/Grid';
import { Sandbox } from 'src/components/Sandbox';

export const Root = () => {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/grid" exact component={Grid} />
      <Route path="/sandbox" exact component={Sandbox} />
    </>
  );
};
