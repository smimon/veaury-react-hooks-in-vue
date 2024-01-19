import { useState } from 'react';

export default function MyReactComponent(): JSX.Element {
  const [someValue, setSomeValue] = useState('');

  setSomeValue('Some value');

  return (
    <div>Hello {someValue}</div>
  );
};