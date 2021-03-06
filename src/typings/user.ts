import React from 'react';

export interface User {
  avatar_url: string;
  bio: string;
  login: string;
  location: string;
  html_url: string;
}

export interface UserContextProps {
  state: User;
  setState: React.Dispatch<React.SetStateAction<User>>;
}
