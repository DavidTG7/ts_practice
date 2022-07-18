import React, { FC } from 'react';
import { Person } from './components/Person';

const App: FC = () => {

  const name: string = 'David';
  const age: number = 36;
  const email: string = 'davidthekoa@gmail.com'
  const isMarried: boolean = false;

  const getName = (name: string): number | string => {
    if (name !== "David"){
      return 0;
    } else {
      return "Torres";
    }
  }
  console.log(typeof(name), typeof(age), typeof(isMarried), typeof(App));

  console.log(getName('David'))

  const handleClick = () => {
    alert('I Love You!')
  }

  return (
    <div className="App">
      <Person name={name} age={age} email={email} handleClick={handleClick}/>
    </div>
  );
}

export default App;
