import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/user-context';
import getUser from '../../utils/get-user';
import { BtnSearchBar, FormSearchBar, InputSearchBar } from './style';

function SearchBar() {
  const [userName, setUserName] = useState<string>('');
  const { setState } = useContext(UserContext);

  useEffect(() => {
    getUser(userName).then((json) => setState(json));
  }, [userName]);

  function handleSubmit(e: any) {
    e.preventDefault();
    const value: string = e.target[0].value;
    setUserName(value);
  }

  return (
    <FormSearchBar onSubmit={handleSubmit}>
      <InputSearchBar type="text" />
      <BtnSearchBar type="submit"> Pesquisar </BtnSearchBar>
    </FormSearchBar>
  );
}

export default SearchBar;
