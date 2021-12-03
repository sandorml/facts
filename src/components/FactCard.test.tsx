import React from 'react';
import { render } from "@testing-library/react";
import { FactCard } from './FactCard';

test('<FactCard/> render text', () => {
  const { getByText } = render(<FactCard text={"testing"} />);
  const element = getByText(/testing/i);
  expect(element).toBeInTheDocument();
});