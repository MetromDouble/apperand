import React from 'react';
import { Route } from 'react-router-dom';
import { Main } from 'src/entries/Main';
import { Grid } from 'src/components/Grid';
import { Sandbox } from 'src/components/Sandbox';
import { FactorioRecipes } from 'src/components/FactorioRecipes';
import { Calendar } from 'src/components/calendar/Calendar';
import { Relation } from 'src/components/relation/Relation';
import { HTMLSandbox } from 'src/components/HTMLSandbox/HTMLSandbox';

export const Root = () => {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/grid" exact component={Grid} />
      <Route path="/sandbox" exact component={Sandbox} />
      <Route path="/factorio" exact component={FactorioRecipes} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/relation" exact component={Relation} />
      <Route path="/html-sandbox" exact component={HTMLSandbox} />
    </>
  );
};
