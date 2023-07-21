'use client';

import { ErrorBoundary, ErrorBoundaryProps } from 'components/ui';

export default (props: ErrorBoundaryProps) => {
  return <ErrorBoundary {...props} />;
};
