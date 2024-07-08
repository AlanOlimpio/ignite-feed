import { ImgHTMLAttributes } from 'react';
export interface AvatarInterfaceProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}
