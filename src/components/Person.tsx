import { FC, useState } from 'react';
interface Props {
  name: string;
  age: number;
  email?: string;
}

export const Person: FC < Props > = ( { name , age , email } ) => {

  const [ country , setCountry ] = useState < string | null > ( null );

  const handleClick = () => {
    alert(`Hello ${name} from ${country}!`)
  }

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
      <input placeholder='Write down here your country...' onChange={event => setCountry(event.target.value)}/>
      <button onClick={handleClick}>ClickMe</button>
      <p>{country}</p>
    </div>
  );
}
