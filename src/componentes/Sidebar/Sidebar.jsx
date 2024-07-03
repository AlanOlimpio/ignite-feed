import React from 'react';
import * as styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import Avatar from '../Avatar';
import headerSidebarImg from '../../assets/header-sidebar.jpg';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={headerSidebarImg} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/alanolimpio.png" alt="Alan Olimpio" />
        <strong>Alan Olimpio</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
