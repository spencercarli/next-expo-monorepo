import { useEffect } from 'react';
import { Text, Button } from 'react-native';

export type ErrorBoundaryProps = {
  error: Error | unknown;
  reset: () => any;
};

export const ErrorBoundary = ({ error, reset }: ErrorBoundaryProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <>
      <Text>Something went wrong!</Text>
      <Button
        title="Try again"
        onPress={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      />
    </>
  );
};
