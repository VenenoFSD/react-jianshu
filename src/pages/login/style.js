import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: #f7f7f7;
  img {
    width: 80px;
    margin: 50px 0 0 40px;
  }
`;

export const LoginContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 420px;
  padding: 50px 50px 30px 50px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  h4 {
    font-weight: 700;
    color: #ea6f5a;
    font-size: 20px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Input = styled.input`
  margin-bottom: 16px;
  border: none;
  outline: none;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 6px;
  color: #333;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.div`
  background-color: #32a8e5;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #3194d0;
  }
`;