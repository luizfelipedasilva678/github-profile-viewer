import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/user-context';
import getUser from '../../utils/get-user';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="Pesquisar" />
      </form>
    </div>
  );
}

export default SearchBar;
