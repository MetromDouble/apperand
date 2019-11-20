import React from 'react';
import { Route } from 'react-router-dom';
import { Main } from 'src/entries/Main';
import { Icons } from 'src/entries/Icons';
import Grid from 'src/components/Grid/Grid';
import { Sandbox } from 'src/components/Sandbox';
import { FactorioRecipes } from 'src/components/FactorioRecipes';
import { Calendar } from 'src/components/calendar/Calendar';
import { Relation } from 'src/components/relation/Relation';
import { HTMLSandbox } from 'src/components/HTMLSandbox/HTMLSandbox';
import { HTMLCanvas } from 'src/components/HTMLCanvas/HTMLCanvas';

export const Root = () => {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/icons" component={Icons} />
      <Route path="/grid" component={Grid} />
      <Route path="/sandbox" component={Sandbox} />
      <Route path="/factorio" component={FactorioRecipes} />
      {/* <Route path="/calendar" component={Calendar} /> */}
      <Route path="/relation" component={Relation} />
      <Route path="/html-sandbox" component={HTMLSandbox} />
      <Route path="/html-canvas" component={HTMLCanvas} />
    </>
  );
};
