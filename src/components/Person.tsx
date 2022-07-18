import * as React from 'react';
interface Props {
  name: string;
  age: number;
  email?: string;
  handleClick?: () => void;
}

export const Person = ({name, age, email, handleClick}: Props) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  );
}
