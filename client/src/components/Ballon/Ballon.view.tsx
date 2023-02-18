import { BaseBallon } from './Ballon.styles';

export interface BallonViewProps {
  children: string | undefined;
}

export default function BallonView({ children }: BallonViewProps) {
  return <BaseBallon>{children}</BaseBallon>;
}
