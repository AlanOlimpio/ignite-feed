import { PencilLine } from 'phosphor-react';
import Avatar from '../Avatar';
import headerSidebarImg from '../../assets/header-sidebar.jpg';
import Styled from './Sidebar.module.css';
import { SidebarInterfaceProps } from '../../interfaces/Sidebar';

export function Sidebar({ author }: SidebarInterfaceProps) {
  return (
    <aside className={Styled.sidebar}>
      <img className={Styled.cover} src={headerSidebarImg} />
      <div className={Styled.profile}>
        <Avatar src={author.avatarUrl} alt={author.name} />
        <strong>{author.name}</strong>
        <span>{author.role}</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
