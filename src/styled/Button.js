import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s ease-in ;
  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in ;
  }
`;

export const OutlineButton = styled(Button)`
 
 background-color: white;
 border: 1px solid black;
 color: black;
 
 &:hover{
    background-color: black;
    color: white;
    border: 1px solid transparent;
    
  }
 
`;