import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100% !important;
    padding: 5px;
  }
`;

export const FormTitle = styled.div`
  width: 100%;
  align-items: center;
  font-weight: bold;
  padding-bottom: 20px;
  font-size: 18px;
`;

export const Form = styled.div`
  width: 500px;
  padding: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 5px 10px #888888;
  @media (max-width: 768px) {
    width: 90% !important;
    padding: 10px;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 10px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Label = styled.span`
  font-weight: bold;
  padding-bottom: 10px;
`;

export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 10px;
  background-color: blue;
  border: none;
  cursor: pointer;
  color: white;
`;
