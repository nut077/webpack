import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './Root.scss';

function getMessage() {
  return 'Hello World';
}

const Root = () => (
  <div>
    <h1 className={styles.hello}>{getMessage()}</h1>
    <div>Hello React Hot Loader</div>
  </div>
);
export default hot(module)(Root);
