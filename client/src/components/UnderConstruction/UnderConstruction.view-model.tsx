import { useNavigate } from 'react-router-dom';

export interface UnderConstructionViewModelProps {
  handleUnderConstruction: () => void;
}

export function UnderConstructionViewModel() {
  const navigate = useNavigate();

  function handleUnderConstruction() {
    navigate('/');
  }

  return {
    handleUnderConstruction,
  };
}
