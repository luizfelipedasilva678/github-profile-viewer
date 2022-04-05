import styled from 'styled-components';

const ProfileBoxContainer = styled.div`
  background: #fff;
  margin: auto auto;
  max-width: 300px;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  img {
    max-width: 100px;
  }

  p {
    margin: 10px 0 10px 0;
    color: #000;
    font-size: 16px;
    display: block;
  }
`;

export default ProfileBoxContainer;
