import React, {FC, useContext} from "react";
import styled from "styled-components";
import {ButtonChildProps, ButtonTextProps} from "../ButtonType";
import {buttonBaseCtx} from "../ButtonPro";

const ButtonTextP = styled.p<ButtonTextProps & {text: string}>`
  position: relative;
  margin: 0;
  font-size: inherit;
  color: #111;
  
  &::before{
    position: absolute;
    content: 'Subscribe';
    font-size: inherit;
    width: 0;
    inset: 0;
    color: #c84747;
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  /**需要将after伪类挂载在text上，否则挂载在button上，当不同尺寸拉升width的时候样式会坍塌*/
  &::after{
    content: '';
    position: absolute;
    width: 0;
    left: 0;
    bottom: -7px;
    background: #c84747;
    height: 2px;
    transition: 0.3s ease-out;
  }
`

const ButtonTextWrapper = styled.button<ButtonTextProps>`
  position: relative;
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
  overflow: hidden;
  height: 45px;
  width: 13rem;
  
  & svg{
    width: 15px;
    position: relative;
    color: gray(#111, 50%);
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  
  &:hover svg{
    transform: translateX(0.1rem);
    color: #c84747;
  }
  
  /**因为after伪类挂载在text上，所以hover的时候将width拉升多一点*/
  &:hover ${ButtonTextP}::after{
    width: 135%;
  }
  
  &:hover ${ButtonTextP}::before{
    width: 100%;
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
        text: ctx?.text ? ctx.text : 'Subscribe',
        size: ctx?.size ? ctx.size : 'medium',
    };

    const switchSizeParam = (size:string) => {
        //switch()
    }

    return(
        <React.Fragment>
            <ButtonTextWrapper
                param={}
            >
                <ButtonTextP
                    param={} text={ctxValue.text}
                >{ctxValue.text}</ButtonTextP>
                <Svg />
            </ButtonTextWrapper>
        </React.Fragment>
    )
}

export default ButtonText;
