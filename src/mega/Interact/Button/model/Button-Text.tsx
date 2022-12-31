import React, {FC, useContext} from "react";
import styled from "styled-components";
import {ButtonChildProps} from "../ButtonType";
import {buttonBaseCtx} from "../ButtonPro";

const ButtonTextP = styled.p`
  position: relative;
  margin: 0;
  font-size: inherit;
  color: #111;
`

const ButtonTextWrapper = styled.button`
    display: flex;
  outline: none;
  border: none;
  padding:0;
  margin: 0;
  background: transparent;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  gap: 0.5rem;
  cursor: pointer;
  
  & svg{
    width: 15px;
    position: relative;
    color: gray(#111, 50%);
  }
`


const Svg = () => (
    <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
    </svg>
)



const ButtonText:FC<ButtonChildProps> = (props) => {

    const {
        onClick,
        onFocus,
        onMouseEnter
    } = props;

    const ctx = useContext(buttonBaseCtx);

    const ctxValue = {

    };

    return(
        <React.Fragment>
            <ButtonTextWrapper>
                <ButtonTextP>Subscribe</ButtonTextP>
                <Svg />
            </ButtonTextWrapper>
        </React.Fragment>
    )
}

export default ButtonText;
