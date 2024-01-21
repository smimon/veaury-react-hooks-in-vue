import { useState } from 'react';

export default function MyReactComponent(): JSX.Element {
  const [someValue] = useState('World 2');

  return (
    <div>Hello {someValue}</div>
  );
};