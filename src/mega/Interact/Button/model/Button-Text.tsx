import React, {FC, useContext} from "react";
import styled from "styled-components";
import {ButtonChildProps, ButtonTextProps} from "../ButtonType";
import {buttonBaseCtx} from "../ButtonPro";
import {
    ButtonTextHuge,
    ButtonTextLarge,
    ButtonTextMedium,
    ButtonTextSmall,
    ButtonTextStyle,
    ButtonTextTiny
} from "../ButtonStyle";

const ButtonTextP = styled.p<ButtonTextProps & {
    text: string;
    bg: string;
}>`
  position: relative;
  margin: ${ButtonTextStyle.margin};
  font-size: inherit;
  color: #111;
  
  &:before{
    //content: '';
    position: absolute;
    content: '${props=>props.text}';
    font-size: inherit;
    width: 0;
    inset: 0;
    color: ${props=>props.bg};
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  /**需要将after伪类挂载在text上，否则挂载在button上，当不同尺寸拉升width的时候样式会坍塌*/
  &::after{
    content: '';
    position: absolute;
    width: 0;
    left: 0;
    bottom: ${props=>props.param.textAfterBottom};
    background: #c84747;
    height: ${ButtonTextStyle.textAfterHeight};
    transition: 0.3s ease-out;
  }
`

const ButtonTextWrapper = styled.button<ButtonTextProps & {
    color:string;
    bg:string;
}>`
  position: relative;
    display: flex;
  outline: none;
  border: none;
  padding: ${ButtonTextStyle.padding};
  margin: ${ButtonTextStyle.margin};
  background: transparent;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  gap: ${ButtonTextStyle.gap};
  cursor: pointer;
  overflow: hidden;
  height: ${props=>props.param.wrapperHeight};
  width: ${props=>props.param.wrapperWidth};
  
  & svg{
    width: ${props=>props.param.svgWidth};
    position: relative;
    color: gray(${props=>props.color}, 50%);
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  
  &:hover svg{
    transform: translateX(0.1rem);
    color: ${props=>props.bg};
  }
  
  /**因为after伪类挂载在text上，所以hover的时候将width拉升多一点*/
  &:hover ${ButtonTextP}::after{
    width: ${props=>props.param.textAfterHoverWidth};
  }
  
  &:hover ${ButtonTextP}::before{
    width: ${ButtonTextStyle.textBeforeHoverWidth};
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
        color: ctx?.fontColor ? ctx.fontColor : '#111',
        background: ( ctx?.background
            && ctx?.background !== 'transparent'
            && ctx?.background !== '') ? ctx.background : '#c84747',
    };

    const switchSizeParam = (size:string) => {
        switch(size){
            case 'tiny':
                return ButtonTextTiny;
            case 'small':
                return ButtonTextSmall;
            case 'medium':
                return ButtonTextMedium;
            case 'large':
                return ButtonTextLarge;
            case 'huge':
                return ButtonTextHuge;
            default:
                return ButtonTextMedium;
        }
    }

    return(
        <React.Fragment>
            <ButtonTextWrapper
                param={switchSizeParam(ctxValue.size)}
                color={ctxValue.color}
                bg={ctxValue.background}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
            >
                <ButtonTextP
                    param={switchSizeParam(ctxValue.size)}
                    text={ctxValue.text}
                    bg={ctxValue.background}

                >{ctxValue.text}</ButtonTextP>
                <Svg />
            </ButtonTextWrapper>
        </React.Fragment>
    )
}

export default ButtonText;
