import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border: 1px solid black;
    border-radius: 5px;
    height: 3em;
    width: 10em;
    align-items: center;
    justify-content: center;
    
    &:hover{
    background-color: rgba(16, 180, 180, 0.624);
    transition: 90ms;
    color: white;
    font-weight:bold;
    }

`