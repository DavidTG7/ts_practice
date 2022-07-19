import React, { FC, createContext } from 'react';
import { Person } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const name: string = 'David';
  const age: number = 36;
  const email: string = 'davidthekoa@gmail.com'

  const contextVaule: AppContextInterface = {
    name: 'David',
    age: 20,
    country: 'Colombia'
  }

  return (
    <AppContext.Provider value={contextVaule}>
      <div className="App">
        <Person name={name} age={age} email={email} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
