import React, {FC, useContext} from "react";
import styled from "styled-components";
import {ButtonChildProps, ButtonSocialProps} from "../ButtonType";
import {buttonBaseCtx} from "../ButtonPro";
import {
    ButtonSocialHuge,
    ButtonSocialLarge,
    ButtonSocialMedium,
    ButtonSocialSmall,
    ButtonSocialStyle,
    ButtonSocialTiny
} from "../ButtonStyle";


const ButtonSocialIcon = styled.div<ButtonSocialProps & {background: string}>`
    background: ${props=>props.color};
  height: ${props=>props.param.iconHeight};
  width: ${props=>props.param.iconHeight};
  border-radius: ${ButtonSocialStyle.iconBorderRadius};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${ButtonSocialStyle.iconLeft};
  transition: ${ButtonSocialStyle.transition};
  
  & svg{
    margin-left: 0.05rem;
    transition: all 0.5s;
    color: ${props=>props.background};
    width: ${props=>props.param.svgWidth};
    height: ${props=>props.param.svgHeight};
  }
`

const ButtonSocialText = styled.p<ButtonSocialProps>`
    margin-left: ${props=>props.param.textMarginLeft};
    color: ${props=>props.color};
`

const ButtonSocialWrapper = styled.button<ButtonSocialProps & {background: string}>`
    font-family: inherit;
  font-size: inherit;
  background: ${props=>props.background};
  color: ${props=>props.color};
  padding: ${ButtonSocialStyle.padding};
  border: none;
  border-radius: ${ButtonSocialStyle.borderRadius};
  letter-spacing: ${ButtonSocialStyle.letterSpacing};
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  overflow: hidden;
  height: ${props=>props.param.wrapperHeight};
  width:  ${props=>props.param.wrapperWidth};
  
  &:hover ${ButtonSocialIcon} svg{
    transform: rotate(360deg);
  }
  
  &:hover ${ButtonSocialIcon}{
    width: calc(100% - 0.85rem);
    border-radius: ${ButtonSocialStyle.hoverIconBorderRadius};
  }
`

const Svg = () => (
    <svg viewBox="0 0 16 16" className="bi bi-telegram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
    </svg>
)

const ButtonSocial:FC<ButtonChildProps> = (props) => {
    const {
        onClick,
        onFocus,
        onMouseEnter
    } = props;

    const ctx = useContext(buttonBaseCtx);

    const ctxValue = {
        size: ctx?.size ? ctx.size : 'medium',
        color: ctx?.fontColor ? ctx.fontColor : '#fff',
        background: (
            ctx?.background
            && ctx?.background !== 'transparent'
            && ctx?.background !== '') ? ctx.background : '#2CA0D9',
        svg: ctx?.svg ? ctx.svg : <Svg/>,
        text: ctx?.text ? ctx.text : 'Button'
    }

    const calcSize = (size:string) => {
        switch (size) {
            case 'tiny':
                return ButtonSocialTiny;
            case 'small':
                return ButtonSocialSmall;
            case 'medium':
                return ButtonSocialMedium;
            case 'large':
                return ButtonSocialLarge;
            case 'huge':
                return ButtonSocialHuge;
            default:
                return ButtonSocialMedium;
        }
    }

    return(
        <React.Fragment>
            <ButtonSocialWrapper
                param={calcSize(ctxValue.size)}
                color={ctxValue.color}
                background={ctxValue.background}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
            >
                <ButtonSocialIcon
                    param={calcSize(ctxValue.size)}
                    color={ctxValue.color}
                    background={ctxValue.background}
                >
                    {ctxValue.svg}
                </ButtonSocialIcon>
                <ButtonSocialText
                    param={calcSize(ctxValue.size)}
                    color={ctxValue.color}
                >{ctxValue.text}</ButtonSocialText>
            </ButtonSocialWrapper>
        </React.Fragment>
    )
}

export default ButtonSocial;
