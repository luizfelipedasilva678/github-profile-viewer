import React, { useState } from 'react';
import UserContext, { UserContextProviderProps } from '../context/user-context';

const userMock = {
  avatar_url: 'teste.jpg',
  bio: 'some bio',
  login: 'some login',
  location: 'some location',
  html_url: 'some html_url',
};

function UserContextProviderMock({ children }: UserContextProviderProps) {
  const [state, setState] = useState(userMock);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProviderMock;
