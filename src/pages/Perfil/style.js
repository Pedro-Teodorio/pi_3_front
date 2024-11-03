import styled from 'styled-components';

export const ProfileSection = styled.section`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 80%;
  padding: 3cqmin 20px;
  border-radius: 16px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const BoxSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;

  h1 {
    font-weight: 700;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  gap: 20px;
  width: 400px;
  height: 128px;
  background: black;
  border-radius: 16px;
  color: white;
  align-items: center;
  padding: 20px;
`;
