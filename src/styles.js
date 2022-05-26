import styled from 'styled-components';

export const Container = styled.div`
  background: #3936c0;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

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
  margin-top: 50px;
  background: ${(props) => (props.isOn ? '#000000' : 'gray')};
  color: #fff;
  border-radius: 10px;
  padding: 1rem 2rem;
  height: 64px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
`;
