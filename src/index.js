import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import RootContainer from 'Containers/Root';

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(RootContainer);

if (module.hot) {
  if (module.hot) {
    module.hot.accept('Containers/Root', () => render(RootContainer));
  }
}
