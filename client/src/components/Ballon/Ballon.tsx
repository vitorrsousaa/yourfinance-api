import { BallonViewProps, BallonView } from './Ballon.view';

interface BallonProps extends BallonViewProps {}

export default function Ballon(props: BallonProps) {
  return <BallonView {...props} />;
}
