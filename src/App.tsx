import React, { FC } from 'react';

const App: FC = () => {

  const name: string = 'David';
  const age: number = 36;
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

  

  return (
    <div className="App">
      {name}
      {age}
      {isMarried}
    </div>
  );
}

export default App;
