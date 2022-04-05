import React, { useContext } from 'react';
import UserContext from '../../context/user-context';
import ProfileBoxContainer from './style';

function ProfileBox() {
  const { state } = useContext(UserContext);

  if (state.login === '') {
    return <></>;
  }

  return (
    <ProfileBoxContainer>
      {state && (
        <>
          <img src={state.avatar_url}></img>
          <p> {state.login} </p>
          <p> {state.bio} </p>
        </>
      )}
    </ProfileBoxContainer>
  );
}

export default ProfileBox;
