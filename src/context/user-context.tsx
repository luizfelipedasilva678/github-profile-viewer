import React, { createContext, useState } from 'react';
import { UserContextProps } from '../typings/user';

const DEFAULT_VALUE = {
  state: {
    avatar_url: '',
    bio: '',
    name: '',
    location: '',
    html_url: '',
  },
  setState: () => {},
};

const UserContext = createContext<UserContextProps>(DEFAULT_VALUE);

interface UserContextProviderProps {
  children: React.ReactNode;
}

function UserContextProvider({ children }: UserContextProviderProps) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContextProvider };
export default UserContext;
