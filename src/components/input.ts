import styled from "styled-components";

 type InputProps = {
  small?: boolean;
}

export const InputTxt = styled.input<InputProps>`
     height: ${(props) => props.small ?  '15em;' : '15em;' };
     width: ${(props) => props.small ?  '15rem;' : '15rem;' };
   margin: 15px 0;
   padding: 2px;
   `

export const InputEmail= styled.input<InputProps>`
     height: ${(props) => props.small ?  '1.5em;' : '15em;' };
     width: ${(props) => props.small ?  '15rem;' : '15rem;' };
   margin: 15px 0;
   padding: 2px;


   `