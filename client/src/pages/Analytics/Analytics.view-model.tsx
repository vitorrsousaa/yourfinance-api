import { useState } from 'react';

export interface AnalyticsViewModelProps {
  hasError: string;
}

export function AnalyticsViewModel() {
  const [hasError, setHasError] = useState('');

  return {
    hasError,
    setHasError,
  };
}
