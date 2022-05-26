import styled from 'styled-components';

export const Container = styled.div`
  background: #3936c0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;

  img {
    margin-top: 50px;
  }

  textarea {
    width: 60%;
    height: 100px;
    border: none;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    font-size: 16px;
    color: #fff;
    background: #3a3a3a;
    resize: none;

    &:focus {
      outline: none;
    }

    @media (max-width: 780px) {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  background: ${(props) => (props.isOn ? '#000000' : 'gray')};
  color: #fff;
  border-radius: 10px;
  padding: 1rem 2rem;
  height: 64px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  overflow-y: hidden;
  height: 100%;

  li {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.14);
    padding: 1rem;
    border-radius: 5px;
  }
`;
