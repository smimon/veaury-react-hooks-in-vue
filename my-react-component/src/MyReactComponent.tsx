import { useState } from 'react';

export default function MyReactComponent(): JSX.Element {
  const [someValue] = useState('World');

  return (
    <div>Hello {someValue}</div>
  );
};