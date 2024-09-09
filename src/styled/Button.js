import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-direction: column;
width: 220px;
padding: 10px 18px;
justify-content: center;
align-items: center;
background-color: black;
border-radius: 5px;
border : none;
color: white;
font-size: 16px;
transition: 0.3s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;

}
`
export const OutLineBtn = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
    background-color: black;
    color: white;
    border: 1px solid black;
    }
`

