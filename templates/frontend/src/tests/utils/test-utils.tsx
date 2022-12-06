/* eslint-disable @typescript-eslint/no-explicit-any */
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { ChakraProvider } from '@chakra-ui/react';


afterEach(() => {
  cleanup();
});

const customRender = (ui: JSX.Element, options = {}) => {
  const Wrapper = ({ children }: any) => (
    <ChakraProvider>{children}</ChakraProvider>
  );

  render(ui, {
    wrapper: Wrapper,
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };