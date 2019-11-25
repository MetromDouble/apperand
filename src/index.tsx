import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { ThemeProvider, DefaultTheme } from 'styled-components';
// import * as monaco from 'monaco-editor';
import configureStore from './redux/configureStore';

import OverlayProvider from 'src/components/Overlay/OverlayProvider';
import { Root } from './Root';
import * as serviceWorker from './serviceWorker';
import { palette } from 'src/common/theme';

import './assets/styles/index.css';

const theme: DefaultTheme = {
  palette
};

const history = createBrowserHistory();
const store = configureStore(history, {});

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <OverlayProvider>
          <Root />
        </OverlayProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));


// monaco.editor.setTheme('vs-dark');
// // @ts-ignore: Unreachable code error
// monaco.editor.create(document.getElementById('editor'), {
//   value: [
//     'function x() {',
//     '\tconsole.log("Hello world!");',
//     '}'
//   ].join('\n'),
//   language: 'typescript'
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
