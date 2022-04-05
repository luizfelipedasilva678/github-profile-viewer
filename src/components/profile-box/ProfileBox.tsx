import React, { useContext } from 'react';
import UserContext from '../../context/user-context';

function ProfileBox() {
  const { state } = useContext(UserContext);

  return <>{state && <img src={state.avatar_url}></img>}</>;
}

export default ProfileBox;
