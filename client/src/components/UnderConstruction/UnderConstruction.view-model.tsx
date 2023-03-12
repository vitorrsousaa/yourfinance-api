import { useState } from 'react';

export interface UnderConstructionViewModelProps {
  state: string;
}

export function UnderConstructionViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
