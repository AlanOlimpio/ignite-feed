import { AvatarInterfaceProps } from '../../interfaces/Avatar';
import Styled from './Avatar.module.css';

export function Avatar({ hasBorder = true, ...props }: AvatarInterfaceProps) {
  return (
    <img
      className={hasBorder ? Styled.avatarWithBorder : Styled.avatar}
      {...props}
    />
  );
}
