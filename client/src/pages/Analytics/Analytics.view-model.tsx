import { useState } from 'react';

export interface AnalyticsViewModelProps {
  state: string;
}

export function AnalyticsViewModel() {
  const [state, setState] = useState('');

  return {
    state,
    setState,
  };
}
