import React, {FC, memo, useContext} from "react";
import styled from "styled-components";
import {ButtonBaseColor, ButtonBaseSize, ButtonConstant, CyberAnimationBig, CyberAnimationSmall} from "../ButtonStyle";
import {buttonBaseCtx} from "../ButtonPro";
import {ButtonChildProps, CyberButtonProps} from "../ButtonType";
import {HandleCyberButtonVmin} from "../ButtonFunc";

const CyberButtonGlitch = styled.span<CyberButtonProps>`
    inset: -0.5vmin;
  display: none;
  position: absolute;
  background-color: #02ffd3;
  text-shadow: -0.2vmin -0.2vmin #02ffd3, -0.2vmin -0.2vmin #fff700;
  clip-path:${ButtonConstant[`polygon`]};
  animation: ${props=>props.custom.animatorType===0?CyberAnimationBig:CyberAnimationSmall} 2s infinite alternate;
  
  &:before{
    content:"";
    inset: 0.2vmin 0.8vmin 0.6vmin 0.5vmin;
    background-color:${ButtonBaseColor.cyber};
    position: absolute;
    z-index: -1
  }
`

const CyberButtonTag = styled.i<CyberButtonProps>`
    color: ${props => props.custom.color};
  font-size: ${props=>props.custom.vminFontSize}vmin;
  position: absolute;
  right: 1.5%;
  bottom: ${props=>HandleCyberButtonVmin(props.custom.vminFontSize)};
  background: transparent;
`

const CyberButtonWrapper = styled.button<CyberButtonProps>`
  width: ${props=>props.custom.vminWidth}vmin;
  height: ${props=>props.custom.vminHeight}vmin;
  background: transparent;
  color: ${props=>props.custom.color};
  font-size: ${props=>props.custom.vminFontSize}vmin;
  font-weight: ${props=>props.custom.fontWeight};
  line-height: ${ButtonBaseSize.cyberLineHeight};
  letter-spacing: ${ButtonBaseSize.cyberLetterSpacing};
  border: none;
  cursor: pointer;
  
  position: relative;
  &:before, &:after{
    content: "";
    inset: 0;
    clip-path: ${ButtonConstant.polygon};
    position: absolute;
    z-index: -1;
  }
  
  &:before{
    content: "";
    background-color: ${ButtonBaseColor.cyberSecond};
    transform: translateX(0.6vmin);
  }
  &:after{
    content: "";
    background-color: ${ButtonBaseColor.cyber}!important;
  }
  
  &:hover ${CyberButtonGlitch}{
    display: block;
  }
  
`

const ButtonCyber:FC<ButtonChildProps> = (props) => {

    const {
        onClick,
        onFocus,
        onMouseEnter
    } = props;

    const ctx = useContext(buttonBaseCtx);

    const wrapperProps = {
        color: ctx?.fontColor ? ctx.fontColor : ButtonBaseColor.cyberFont,
        vminFontSize: ctx?.fontSize? ctx.fontSize : ButtonBaseSize.cyberVminSize,
        vminWidth: ctx?.vminWidth? ctx.vminWidth : ButtonBaseSize.cyberVminSize*12,
        vminHeight: ctx?.vminHeight?ctx.vminHeight: ButtonBaseSize.cyberVminSize*3,
        fontWeight: ctx?.fontWeight?ctx.fontWeight : ButtonBaseSize.cyberFontWeight,
        animatorType: ctx?.fontSize? (ctx.fontSize === 2 || ctx.fontSize===3) ? 1 : 0 : 1,
    }

    //console.log('wrapper',ctx)

    return (
        <React.Fragment>
            <CyberButtonWrapper
                custom={wrapperProps}
                onClick={onClick}
                onFocus={onFocus}
                onMouseEnter={onMouseEnter}
            >
                <span>{ctx?.text}</span>
                <CyberButtonGlitch custom={wrapperProps}>{ctx?.text}</CyberButtonGlitch>
                <CyberButtonTag custom={wrapperProps}>{ctx?.subText}</CyberButtonTag>
            </CyberButtonWrapper>
        </React.Fragment>
    )
}

export default memo(ButtonCyber);
