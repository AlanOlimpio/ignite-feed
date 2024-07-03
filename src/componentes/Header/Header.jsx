import React from 'react';
import * as Styled from './Header.module.css';
import ignitelogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={Styled.header}>
      <img src={ignitelogo} />
      <strong>Ignite Feed</strong>
    </header>
  );
}
