import { BallonStyles } from './styles';

interface BallonProps {
  children: string | undefined;
}

export default function Ballon({ children }: BallonProps) {
  return <BallonStyles>{children}</BallonStyles>;
}
