import { BaseBallon } from './Ballon.styles';

export interface BallonViewProps {
  children: string | undefined;
}

export function BallonView({ children }: BallonViewProps) {
  return <BaseBallon>{children}</BaseBallon>;
}
