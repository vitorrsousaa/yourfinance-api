import { Container } from './styles';

interface LoadingProps {
  size?: string;
}

const Loading = ({ size }: LoadingProps) => {
  return (
    <Container size={size}>
      <div className="loader"></div>
    </Container>
  );
};

export default Loading;
