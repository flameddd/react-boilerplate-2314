
import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageA from 'containers/PageA/Loadable';
import PageB from 'containers/PageB/Loadable';
import Header from 'components/Header';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/page_a" component={PageA} />
        <Route exact path="/page_b" component={PageB} />
        <Redirect to="/page_a" />
      </Switch>
    </AppWrapper>
  );
}
