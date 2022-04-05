import React from 'react';
import AppContainer from './style';
import { UserContextProvider } from '../../context/user-context';
import ProfileBox from '../profile-box/ProfileBox';
import SearchBar from '../search-bar/SearchBar';

function App() {
  return (
    <AppContainer>
      <UserContextProvider>
        <SearchBar />
        <ProfileBox />
      </UserContextProvider>
    </AppContainer>
  );
}

export default App;
